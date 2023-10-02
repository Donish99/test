import db from "@/app/db";

export const POST = async (request) => {
    const {email, password, date} = await request.json();

    try {
        // await connectToDB();
        // const newPrompt = new Prompt({ creator: userId, prompt, tag });

        // await newPrompt.save();
        const a = await db.none('INSERT INTO users (email, pass, date) VALUES ($1, $2, $3)', [email, password, date]);
        return new Response(JSON.stringify(a), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 });
    }
}