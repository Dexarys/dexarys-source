import "./css/Project.css";

const Project = ({ onClose, item }) => {
  const imgPath = new URL(`../../assets/img/${item.source}`, import.meta.url)
    .href;
  return (
    <div className="mask-modal" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="text-center title">{item.name}</h3>
          <button className="p-close-button" onClick={onClose}><span className="p-close-button-text">X</span></button>
        </div>
        <div className="modal-content">
          <div className="projects_img_div">
            <img className="projects_img" src={imgPath} alt={item.desc_img} />
          </div>
          <div>
            <div style={{ whiteSpace: 'pre-line' }}>{item.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
