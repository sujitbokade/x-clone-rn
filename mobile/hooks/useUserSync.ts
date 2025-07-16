import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "@clerk/clerk-expo"
import { useApiClient, userApi } from "@/utils/api"

export const useUserSync = () => {
    const {isSignedIn} = useAuth()
    const api = useApiClient()

  const syncUserMutation = useMutation({
        mutationFn:() => userApi.syncUser(api),
        onSuccess: (response) => {console.log("User synced successfully", response.data.user)},
        onError: (error) =>  console.log("User sync failed", error)
    })

    useEffect(() => {
        if(isSignedIn && !syncUserMutation.data){
            syncUserMutation.mutate()
        }
    }, [])

    return null
}