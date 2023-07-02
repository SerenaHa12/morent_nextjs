import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, year, model, limit, fuel } = filters
	const headers = {
		'X-RapidAPI-Key': '6ae25c5b0dmsh1dcf2111f7d15ddp103047jsn61d0765af8d0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });

	const result = await response.json();

	return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {}

export const updateSearchParams = (type: string, value: string) => {
	// Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
	return newPathname;
}