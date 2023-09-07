import React, { useState, useEffect } from 'react';

const VideoForm = ({ videoToEdit, onCloseForm, onSaveVideo }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    link: '',
  });

  useEffect(() => {
    if (videoToEdit) {
      setFormData({
        title: videoToEdit.title || '',
        content: videoToEdit.content || '',
        link: videoToEdit.link || '',
      });
    }
  }, [videoToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveVideo(formData);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{videoToEdit ? 'Modifier la vidéo' : 'Ajouter une vidéo'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Contenu</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Lien</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="bg-primary text-white px-3 py-1 rounded-md">
              Enregistrer
            </button>
            <button onClick={onCloseForm} className="bg-red-500 text-white px-3 py-1 rounded-md">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoForm;
