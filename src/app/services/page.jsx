import Link from "next/link";


export default function ServicesPage() {
    const data = [
      {
        _id: "64c71a3e2b8f9c1d4f5a6b7c",
        service_name: "Web Development",
        service_image: "https://i.ibb.co.com/BzVNnYZ/r17.webp",
        service_description:
          "Building responsive and high-quality websites tailored to your needs.",
      },
      {
        _id: "64c71a3e2b8f9c1d4f5a6b7d",
        service_name: "Mobile App Development",
        service_image: "https://i.ibb.co.com/rQ9qZ6v/r13.jpg",
        service_description:
          "Creating user-friendly and feature-rich mobile applications for Android and iOS.",
      },
      {
        _id: "64c71a3e2b8f9c1d4f5a6b7e",
        service_name: "Digital Marketing",
        service_image: "https://i.ibb.co.com/PFsL21F/r7.jpg",
        service_description:
          "Boost your online presence with our tailored digital marketing strategies.",
      },
      {
        _id: "64c71a3e2b8f9c1d4f5a6b7f",
        service_name: "Graphic Design",
        service_image: "https://i.ibb.co.com/Syjx2YW/r8.jpg",
        service_description:
          "Designing stunning visuals and branding materials to make your business stand out.",
      },
      {
        _id: "64c71a3e2b8f9c1d4f5a6b80",
        service_name: "SEO Optimization",
        service_image: "https://i.ibb.co.com/R39Gs3n/MG-1533-052014.jpg",
        service_description:
          "Improving your website's search engine ranking to drive organic traffic.",
      },
      {
        _id: "64c71a3e2b8f9c1d4f5a6b81",
        service_name: "Content Writing",
        service_image: "https://i.ibb.co.com/Syjx2YW/r8.jpg",
        service_description:
          "Providing high-quality content that engages your audience and drives conversions.",
      },
    ];

  return (
      <div className='text-2xl '>
          <p className="text-3xl font-bold">Services Page</p>
          {data.map((item) => {
              return (
                  <div key={item._id} className="">
                      <Link href={`/services/${item._id}`}>
                      <img className="w-40 h-40 object-cover" src={item.service_image} alt="" />
                      </Link>
                  </div>
              )
          })}
    </div>
  )
}
