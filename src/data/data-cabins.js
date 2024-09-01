import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in Room 001. Located in a stylish and modern hotel, this room offers a serene and private retreat. Inside, enjoy sleek, contemporary interiors, a cozy seating area, and a plush king-size bed dressed in fine linens for a peaceful night's sleep. The room features a luxurious en-suite bathroom with a spa-like shower, and large windows that offer stunning city or garden views.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "b2.jpg",
    description:
      "Escape to the elegance of our Room 002, perfect for couples seeking a luxurious stay. This room features warm, inviting interiors with modern amenities, a comfortable seating area, and a plush king-size bed. The en-suite bathroom is designed for relaxation with a spacious spa-like shower. Enjoy your private space with views that capture the essence of the city or nature right from your window.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "b3.jpg",
    description:
      "Experience family luxury in our spacious Room 003, ideal for up to 4 guests. This well-appointed room offers a comfortable living space with modern amenities, a cozy seating area, and plush beds to ensure restful nights. The room includes an elegant en-suite bathroom with premium fixtures. Enjoy beautiful city or garden views from your room, perfect for a relaxing family getaway.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "b4.jpg",
    description:
      "Indulge in a luxurious family vacation in Room 004, designed for up to 4 guests. This spacious room features sophisticated interiors with premium finishes, a relaxing living area, and plush bedding for maximum comfort. The en-suite bathroom is styled with spa-like features, offering a tranquil space to unwind. Large windows provide stunning views, making it a perfect retreat for families.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "b5.jpg",
    description:
      "Enjoy a relaxing stay with your family or group in our spacious Room 005. This room is designed to accommodate up to 6 people, offering modern comforts and a warm ambiance. Inside, you'll find comfortable bedding, an inviting seating area, and a well-appointed en-suite bathroom. Large windows offer beautiful views, making it an ideal choice for groups or families.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "b6.jpg",
    description:
      "Experience luxury with your group in our elegant Room 006, accommodating up to 6 guests. The room boasts stylish interiors with high-quality finishes, a spacious seating area, and plush beds for a restful sleep. The en-suite bathroom is equipped with premium amenities, creating a spa-like experience. Enjoy panoramic views from your room, adding an extra touch of luxury to your stay.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "b7.jpg",
    description:
      "Perfect for large groups or families, Room 007 offers a generous space for up to 8 guests. The room features multiple sleeping areas with comfortable beds, a cozy living space, and a well-equipped en-suite bathroom. With modern décor and large windows providing scenic views, this room ensures a memorable and comfortable stay for everyone.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "b8.jpg",
    description:
      "Experience grandeur and comfort in Room 008, ideal for large groups or multiple families. This expansive room features luxurious interiors, multiple seating areas, and plush bedding in a serene setting. The en-suite bathrooms are elegantly designed with high-end amenities. Enjoy breathtaking views from the large windows, making this room the epitome of luxury and convenience for larger gatherings.",
  },
];
