import { supabase } from "../lib/supabase";
import { Trip as TripType } from "../lib/types";

export default async function getAllTrips(): Promise<TripType[]> {
  try {
    const { data, error } = await supabase
      .from("trips")
      .select(
        `
        *,
        boat:boats(*)
      `
      )
      .order("sticky", { ascending: false })
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching trips:", error);
      throw error;
    }

    console.log(JSON.stringify(data, null, 2));

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
