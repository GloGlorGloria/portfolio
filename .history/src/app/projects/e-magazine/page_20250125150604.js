// /src/app/projects/e-magazine/page.js
export default function EMagazineProject() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold">Print & E-Magazine</h1>
        <p className="mt-4">
          This is the description of the Print & E-Magazine project. It showcases various magazine designs and their digital versions.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="/images/magazine_img1.png" alt="Image 1" className="w-full h-auto rounded-md" />
          <img src="/images/magazine_img2.png" alt="Image 2" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </main>
  );
}
