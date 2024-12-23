import { supabase } from "./supabase";

export default async function getAllPosts() {
  try {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .order("sticky", { ascending: false })
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching trips:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
