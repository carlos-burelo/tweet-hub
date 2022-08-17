import type { Group, Tweet, User } from "#types"
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  getDocs,
  doc,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
// console.log(import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = {
  collection<T>(collectionName: string) {
    return {
      async add(doc: Omit<T, 'id'>) {
        return addDoc(collection(firestore, collectionName), doc) as unknown as Promise<T>
      },
      subscribe(callback: (docs: T[]) => void) {
        const sorted = query(collection(firestore, collectionName), orderBy('updatedAt', 'desc'))
        return onSnapshot(sorted,
          (snapshot) => {
            const docs = snapshot.docs.map(doc => {
              const data = doc.data() as T
              const { id } = doc
              return {
                id,
                ...data,
              }
            })
            return callback(docs)
          },
          error => console.log(error)
        )
      },
      async remove(id: ID) {
        return await deleteDoc(doc(firestore, collectionName, id))
      },
      async update(id: ID, data: T) {
        return await updateDoc(doc(firestore, collectionName, id), data)
      },
      async get(id: ID) {
        const docRef = await getDoc(doc(firestore, collectionName, id))
        return docRef.data() as T

      },
      async getAll() {
        const querySnapshot = await getDocs(collection(firestore, collectionName))
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as unknown as T)
      },
      async findBy(key: keyof T, value: Primitives) {
        const collectionRef = collection(firestore, collectionName)
        return query(collectionRef, where(key as string, '==', value)) as unknown as T
      },
      async findAllBy(key: keyof T, value: Primitives) {
        const collectionRef = collection(firestore, collectionName)
        return query(collectionRef, where(key as string, '==', value)) as unknown as T[]
      }
    }
  }
}

export const $tweets = db.collection<Tweet>('tweets')
export const $users = db.collection<User>('users')
export const $groups = db.collection<Group>('groups')