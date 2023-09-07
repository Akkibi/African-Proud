import type { NextPage } from 'next'

import dayjs from 'dayjs'

// Define the prop type for the component
interface DateFormatterProps {
  date: Date // Assuming 'date' is a string representing the date
  time: boolean
}

const DateFormatter: NextPage<DateFormatterProps> = ({ date, time }) => {
  // pass the date, and use the format function, specify a format.
  let dateFormat: string = ''
  if (!date) return null
  if (!time) {
    dateFormat = dayjs(date).format('MM/DD/YYYY') // 03/19/2022
    return (
      <>
        <time dateTime={dateFormat}>{dateFormat}</time>
      </>
    )
  }
  dateFormat = dayjs(date).format('MM/DD/YYYY HH:mm:ss') // 03/19/2022 15:57:25 PM"
  return (
    <>
      <time dateTime={dateFormat}>{dateFormat}</time>
    </>
  )
}

export default DateFormatter
