import styles from './styles.css';

export default function eMagazine() {
  return (
    <main className="main-container">
      <div className="content-container">
        <h1 className="project-title">Print & E-Magazine</h1>
        
        <div className="project-details">
          {/* Left column: Large Image */}
          <div className="left-column">
            <img
              src="/images/e-magazine-large.png" // Replace with your large image URL
              alt="E-Magazine Preview"
              className="large-image"
            />
          </div>

          {/* Right column: Project Details */}
          <div className="right-column">
            <h2 className="section-title">Summary</h2>
            <p className="project-summary">
              The Print & E-Magazine project showcases a collection of magazine designs and their digital counterparts. The design focuses on enhancing readability, aesthetics, and user experience across both print and digital formats.
            </p>

            <h2 className="section-title">Skills Used</h2>
            <ul className="skills-list">
              <li>Adobe InDesign</li>
              <li>Adobe Photoshop</li>
              <li>UX/UI Design</li>
              <li>Typography</li>
              <li>Print Design</li>
              <li>Digital Publishing</li>
            </ul>
          </div>
        </div>

        {/* Additional Project Images Section */}
        <div className="additional-images">
          <h2 className="section-title">Project Images</h2>
          <div className="images-grid">
            <img
              src="/images/magazine_img1.png" // Replace with actual image URLs
              alt="Image 1"
              className="project-image"
            />
            <img
              src="/images/magazine_img2.png" // Replace with actual image URLs
              alt="Image 2"
              className="project-image"
            />
            <img
              src="/images/magazine_img3.png" // Replace with actual image URLs
              alt="Image 3"
              className="project-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
