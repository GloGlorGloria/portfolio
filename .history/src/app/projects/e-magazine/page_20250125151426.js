// /src/app/projects/e-magazine/page.js

export default function EMagazineProject() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold">Print & E-Magazine</h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Large Image */}
          <div className="lg:w-full">
            <img
              src="/images/e-magazine-large.png" // Replace with your large image URL
              alt="E-Magazine Preview"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>

          {/* Right column: Project Details */}
          <div className="lg:w-full">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="mt-4">
              The Print & E-Magazine project showcases a collection of magazine designs and their digital counterparts. The design focuses on enhancing readability, aesthetics, and user experience across both print and digital formats.
            </p>

            <h2 className="text-xl font-semibold mt-6">Skills Used</h2>
            <ul className="mt-4 list-disc pl-6">
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
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Project Images</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/images/magazine_img1.png" // Replace with actual image URLs
              alt="Image 1"
              className="w-full h-auto rounded-md shadow-md"
            />
            <img
              src="/images/magazine_img2.png" // Replace with actual image URLs
              alt="Image 2"
              className="w-full h-auto rounded-md shadow-md"
            />
            <img
              src="/images/magazine_img3.png" // Replace with actual image URLs
              alt="Image 3"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
