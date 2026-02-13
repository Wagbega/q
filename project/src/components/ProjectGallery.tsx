import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  service_type: string;
  images: string[];
}

export function ProjectGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('project_galleries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length === 0) {
          setProjects(sampleProjects);
        } else {
          const formattedData = (data || []).map((project: any) => ({
            ...project,
            images: Array.isArray(project.images) ? project.images : [],
          }));
          setProjects(formattedData);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(sampleProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Project Showcase
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our completed projects across solar installations, amusement rides, security systems, and industrial automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="group cursor-pointer rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64 bg-gray-200 dark:bg-slate-700 overflow-hidden">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 dark:from-slate-700 to-gray-400 dark:to-slate-600">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                  {project.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                      {project.images.length} photos
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">
                    {project.service_type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition"
              >
                <X size={24} className="dark:text-white" />
              </button>
            </div>

            <div className="p-6">
              {selectedProject.images.length > 0 ? (
                <div className="mb-8">
                  <div className="relative w-full bg-gray-200 dark:bg-slate-700 rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[500px] object-cover"
                    />
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handlePrevImage}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition"
                      >
                        <ChevronLeft size={24} className="dark:text-white" />
                      </button>
                      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                      <button
                        onClick={handleNextImage}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition"
                      >
                        <ChevronRight size={24} className="dark:text-white" />
                      </button>
                    </div>
                  )}

                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-16 h-16 rounded overflow-hidden border-2 transition ${
                            idx === currentImageIndex
                              ? 'border-blue-600'
                              : 'border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-500'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-80 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-8">
                  <span className="text-gray-500 dark:text-gray-400">No images available</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">
                    Service Type
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 capitalize">{selectedProject.service_type}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Details</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Commercial Solar Array Installation',
    description: 'Large-scale solar installation for a commercial office complex with 450kW capacity. System includes advanced monitoring and achieved 60% energy reduction.',
    service_type: 'Solar',
    images: [
      'https://images.pexels.com/photos/159397/solar-power-plant-159397.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/53621/solar-panel-solar-modules-installation-53621.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: '2',
    title: 'Amusement Park Ride Installation',
    description: 'Complete installation of modern spinning ride at family entertainment center. Including structural setup, safety systems, and testing.',
    service_type: 'Amusement',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: '3',
    title: 'Enterprise CCTV Security System',
    description: '4K multi-camera surveillance system installed across a 5-story office building. 24/7 monitoring with AI threat detection capabilities.',
    service_type: 'CCTV',
    images: [
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9036220/pexels-photo-9036220.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: '4',
    title: 'Smart Factory Automation System',
    description: 'Complete IoT integration for manufacturing facility. Real-time production monitoring, predictive maintenance, and 35% efficiency improvement.',
    service_type: 'Automation',
    images: [
      'https://images.pexels.com/photos/8566534/pexels-photo-8566534.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3938016/pexels-photo-3938016.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: '5',
    title: 'Residential Solar & Battery System',
    description: 'Home solar installation with Tesla battery storage. Provides 100% energy independence and emergency backup power.',
    service_type: 'Solar',
    images: [
      'https://images.pexels.com/photos/159397/solar-power-plant-159397.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: '6',
    title: 'Multi-Location CCTV Network',
    description: 'Retail chain security system spanning 15 locations with centralized monitoring. HD cameras with integrated loss prevention analytics.',
    service_type: 'CCTV',
    images: [
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
];
