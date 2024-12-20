export const metadata = {
  title: "Post a Trip - SailVoyages",
  description: "Share your sailing adventure with others",
};

export default function PostATrip() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold font-inter mb-2">
          Post a sailing trip
        </h1>
        <div className="text-gray-500">
          Share your sailing adventure and connect with fellow sailors looking
          for unforgettable experiences.
        </div>
      </div>

      {/* Form */}
      <form className="mb-12">
        <div className="divide-y divide-gray-200 -my-6">
          {/* Group #1 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">1.</span> Your Details
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Captain Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full"
                  type="text"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Contact Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  className="form-input w-full"
                  type="email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="boat"
                >
                  Boat Details <span className="text-red-500">*</span>
                </label>
                <input
                  id="boat"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="E.g., 42ft Beneteau Oceanis"
                />
              </div>
            </div>
          </div>

          {/* Group #2 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">2.</span> Trip Details
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="route"
                >
                  Route <span className="text-red-500">*</span>
                </label>
                <input
                  id="route"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="E.g., Athens - Santorini - Mykonos"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="duration"
                >
                  Duration <span className="text-red-500">*</span>
                </label>
                <select id="duration" className="form-select w-full" required>
                  <option>Day Trip</option>
                  <option>Weekend (2-3 days)</option>
                  <option>Week Long (7 days)</option>
                  <option>Extended (10+ days)</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="departure"
                >
                  Departure Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="departure"
                  className="form-input w-full"
                  type="date"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="capacity"
                >
                  Guest Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  id="capacity"
                  className="form-input w-full"
                  type="number"
                  min="1"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="price"
                >
                  Price per Person <span className="text-red-500">*</span>
                </label>
                <input
                  id="price"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="E.g., €500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="description"
                >
                  Trip Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  className="form-textarea w-full"
                  rows={4}
                  required
                  placeholder="Describe the experience, highlights, and what's included..."
                />
              </div>
            </div>
          </div>

          {/* Group #3 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">3.</span> Photos & Promotion
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="photos"
                >
                  Trip Photos <span className="text-red-500">*</span>
                </label>
                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
