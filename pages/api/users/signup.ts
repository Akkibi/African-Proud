import { db } from "../../../dbConfig/dbPrisma";
import { NextApiRequest, NextApiResponse } from 'next';
import bcryptjs from 'bcryptjs';
import { sendEmail } from "../../../helpers/mailer";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const body = await request.body;
    const { genre, firstName, username, age, city, country, phoneNumber, phoneNumberCountry, email, password, userType} = body;

    const existingUser = await db.user.findFirst({ where: { email } });
    if (existingUser) {
      return response.status(400).json({ message: "User already exists" });
    }

    const currentDatetime = new Date();
    const oneHourLater = new Date(currentDatetime.getTime() + 3600000);

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const ageAsInt = parseInt(age, 10);

    const createdUser = await db.user.create({
      data: {
        genre,
        firstName,
        username,
        age: ageAsInt,
        city, 
        country,
        phoneNumber,
        phoneNumberCountry,
        email,
        password: hashedPassword,
        role: "normal",
        isVerified: false,
        userType,
        contrat: null,
        forgotPasswordToken: "",
        forgotPasswordTokenExpiry: oneHourLater.toISOString(), 
        verifyToken: "",
        verifyTokenExpiry: oneHourLater.toISOString(),
      },
    });

    await sendEmail({ email, emailType: "VERIFY", userId: createdUser.id });

    return response.json(body);
  } catch (error:any) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}