import { firebase, db } from './firebase'
import { collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const bd = collection(db, "movies")
try {

} catch (error) {

}
const moviesApi = {
    getMovies: async () => {
        const documents = await getDocs(bd)
        return documents.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })
    },
    addMovie: async (form) => {
        const id = await addDoc(collection(db, "movies"), form)
        return { ...form, id }
    },
    getMovieById: async (id) => {
        const docRef = doc(db, "movies", id)
        const document = await getDoc(docRef)
        return { ...document.data(), id }
    },
    updateMovie: async (form) => {
        const docRef = doc(db, "movies", form.id)
        const document = await updateDoc(docRef,form)
        return document
    },
    deleteMovie: async (id) => {
        const docRef = doc(db, "movies", id)
        return await deleteDoc(docRef);
    },
}

export default moviesApi