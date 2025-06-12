import { Button } from "./button";
import { Plus } from "lucide-react";

const Certifications = () => {
  return (
    <div className="p-10">
      {/* Certifications Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">Certifications</h3>
        </div>

        {/* Certification 1 */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            CERTIFICATION 1
          </label>
          <input
            type="url"
            placeholder="https://www.credly.com/badges/your-certification-link"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Certification 2 */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            CERTIFICATION 2
          </label>
          <input
            type="url"
            placeholder="https://www.coursera.org/account/accomplishments/certificate/your-id"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Certification 3 */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            CERTIFICATION 3
          </label>
          <input
            type="url"
            placeholder="https://aws.amazon.com/verification/your-certificate-id"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Certification 4 */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            CERTIFICATION 4
          </label>
          <input
            type="url"
            placeholder="https://www.udemy.com/certificate/your-certificate-link"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full h-12 border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
