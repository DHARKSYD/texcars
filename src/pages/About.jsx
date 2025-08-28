import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function About() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCars = async () => {
    setLoading(true)
    toast.loading("Fetching cars, please wait...", { id: "fetch-toast" })
    try {
      const res = await fetch('https://688cb598cd9d22dda5ce2f0d.mockapi.io/api/cars')
      const data = await res.json()
      console.log('Sample car object:', data[0])
      setAllCars(data)
      toast.success("Cars fetched successfully!", { id: "fetch-toast" })
    } catch (error) {
      console.error('Error fetching cars:', error)
      toast.error("Error fetching cars. Try again later.", { id: "fetch-toast" })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
    return () => setLoading(false)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mt-15 mb-4">About</h1>
      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allCars.map(car => (
            <li key={car.id} className="border rounded-md overflow-hidden shadow-md">
              <img
                src={car.image} // <-- use your actual image key
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h2 className="font-semibold text-lg">{car.name}</h2>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
