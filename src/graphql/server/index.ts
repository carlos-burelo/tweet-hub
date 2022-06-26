import UserTypeDefs from "./users/typeDefs"
import UserResolvers from "./users/resolvers"
import TweetTypeDefs from "./tweets/typeDefs"
import TweetResolvers from "./tweets/resolvers"

export const resolvers = [UserResolvers, TweetResolvers]
export const typeDefs = [UserTypeDefs, TweetTypeDefs]