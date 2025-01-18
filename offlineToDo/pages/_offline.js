import { Button } from "@/components/ui/button"

export default function Offline() {
  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-medium text-gray-900">You're offline</h1>
        <p className="text-gray-600">Please check your internet connection</p>
        <Button 
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}