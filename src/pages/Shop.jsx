import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { ASSETS } from '../assets';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/reducers/cartSlice";
import ProductCard from "../components/ProductCard"; // <-- import ProductCard

export default function Shop() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Map car names to your images and prices
  const carData = {
    "Mercedes AMG-GT": {
      image: ASSETS.mercedes_race_car_removebg_preview,
      price: 12000000
    },
    "Red Shadow": {
      image: ASSETS.shadowed_red_car,
      price: 95000000
    },
    "Blue Sport": {
      image: ASSETS.sports_blue_car,
      price: 110000000
    },
    "Lamborghini Ash": {
      image: ASSETS.lamborgini_ash_car,
      price: 25000000
    },
  };

  // Fetch cars from API
  const fetchCars = async () => {
    setLoading(true);
    toast.loading("Fetching cars, please wait...", { key: "123", duration: 3000 });
    try {
      const res = await fetch(`https://688cb598cd9d22dda5ce2f0d.mockapi.io/api/cars`);
      const data = await res.json();
      setAllCars(data);
      toast.dismiss("123");
      toast.success("Cars loaded successfully!", { duration: 3000 });
    } catch (error) {
      console.log('error', error);
      toast.error("An error occurred while fetching the cars. Please try again later.", { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const uniqueCars = [];
  const seenNames = new Set();
  for (const car of allCars) {
    if (!seenNames.has(car.name)) {
      uniqueCars.push(car);
      seenNames.add(car.name);
    }
  }

  return (
    <main className="space-y-10">

      {/* Car Section */}
      <section className="py-10 px-4 space-y-10">
        <div className="container mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Explore Our Cars</h2>
          <p className="text-center text-lg md:text-xl opacity-70">
            Browse through our collection of luxury cars and find the perfect one for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center">Loading...</div>
            ) : uniqueCars.length > 0 ? (
              uniqueCars.slice(0, 6).map((car) => {
                const carInfo = carData[car.name] || {};
                return (
                  <ProductCard
                    key={car.id}
                    id={car.id}
                    image={carInfo.image || ASSETS.mercedes_race_car_removebg_preview || ASSETS.shadowed_red_car || ASSETS.sports_blue_car || ASSETS.lamborgini_ash_car}
                    name={car.name}
                    price={carInfo.price || car.price}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center">No cars available at the moment.</div>
            )}
          </div>
        </div>
      </section>

      
    </main>
  );
}
