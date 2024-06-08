

import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query } from "firebase/firestore";
import type { RequestHandler } from "@sveltejs/kit";

const firebaseConfig = {
    apiKey: "AIzaSyBjSnFXEXgsx1uww1PmC45yOaQcDn8uK1s",
    authDomain: "genesislms.firebaseapp.com",
    projectId: "genesislms",
    storageBucket: "genesislms.appspot.com",
    messagingSenderId: "513101123280",
    appId: "1:513101123280:web:ada4def8b5ab8811f9d8d5",
    measurementId: "G-6722B6QG6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export const GET: RequestHandler = async({ }) => {

    try {
        const data = query(collection(database, "wishes"), limit(120));
        const snapshot = await getDocs(data);
    
        const wishes : any[] = [];
    
        snapshot.forEach((doc) => {
            wishes.push({ id: doc.id, ...doc.data() });
        });

        return new Response(JSON.stringify(wishes), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error('Error retrieving documents:', error);
        return new Response(JSON.stringify({ error: 'Failed to retrieve documents' }), {
          headers: { 'Content-Type': 'application/json' },
          status: 500
        });
    }



}

export const POST: RequestHandler = async ({ request }) => {

    
    try {
        const { message } = await request.json();
    
        const document = await addDoc(collection(database, "wishes"), { message: message });
        console.log(document)
    
        return new Response("Successfully added document", {
            headers: {
                'Content-Type': 'text/plain',
            },
            status: 200
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to add document' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500
        });
    }
}


