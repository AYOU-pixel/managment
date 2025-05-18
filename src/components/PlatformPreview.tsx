
import { cn } from "@/lib/utils";

const PlatformPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Designed for modern teams</h2>
          <p className="mt-4 text-xl text-gray-600">
            Powerful features to help you manage tasks and projects more effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task Board Preview */}
          <div className={cn(
            "bg-white rounded-xl shadow-lg overflow-hidden",
            "transform transition-all duration-300 hover:scale-105"
          )}>
            <div className="p-6 bg-primary">
              <h3 className="text-xl font-semibold text-white">Task Board</h3>
              <p className="text-primary-foreground opacity-90">Visualize your workflow</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {["To Do", "In Progress", "Done"].map((column, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <h4 className="font-medium text-gray-700 mb-2">{column}</h4>
                    {[1, 2, 3].map((task) => (
                      <div 
                        key={task} 
                        className="bg-white rounded shadow p-2 mb-2 border-l-4 border-primary"
                      >
                        <p className="text-sm">Task {task + (idx * 3)}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Feature</span>
                          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Collaboration Preview */}
          <div className={cn(
            "bg-white rounded-xl shadow-lg overflow-hidden",
            "transform transition-all duration-300 hover:scale-105"
          )}>
            <div className="p-6 bg-primary">
              <h3 className="text-xl font-semibold text-white">Team Collaboration</h3>
              <p className="text-primary-foreground opacity-90">Chat and file sharing</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">JD</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">I've updated the design specs for the landing page</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:45 AM</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-green-700">AM</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Great! I'll review them this afternoon</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:47 AM</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-700">SD</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-2 items-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <span className="text-blue-600 text-sm underline">landing-page-spec.pdf</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">11:03 AM</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex space-x-2">
                    <input type="text" placeholder="Type your message..." className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    <button className="bg-primary text-white rounded-lg p-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
