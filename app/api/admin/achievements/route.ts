import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { title, description, prize, date, image_url } = await request.json()

    // Validate required fields
    if (!title || !description || !prize || !date) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Insert the new achievement
    const { data, error } = await supabase
      .from("achievements")
      .insert([{ title, description, prize, date }])
      .select()

    if (error) {
      console.error("Error inserting achievement:", error)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id")

    if (!id) {
      return NextResponse.json({ message: "Missing achievement ID" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Delete the achievement
    const { error } = await supabase.from("achievements").delete().eq("id", id)

    if (error) {
      console.error("Error deleting achievement:", error)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Achievement deleted successfully" })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
