import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import heroImage from "../assets/image/hero-section.png";
import {
  Code,
  Server,
  Cpu,
  Rocket,
  ChevronRight,
  ShieldCheck,
  Cloud,
  Database,
  Smartphone,
} from "lucide-react";

// Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="bg-red-50 p-6 rounded-xl text-center">
      <h3 className="text-lg font-medium text-red-800">
        3D Model Failed to Load
      </h3>
      <p className="mt-2 text-red-600">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

// 3D Model Component with fallback
function LaptopModel() {
  const group = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 8;
      group.current.rotation.x = Math.cos(t / 4) / 8;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={0.8} />
    </group>
  );
}

// Loading Component
function ModelLoader() {
  return (
    <Html center>
      <div className="text-center p-4 bg-white bg-opacity-80 rounded-lg">
        <div className="animate-pulse flex flex-col items-center">
          <Cpu className="h-8 w-8 text-indigo-600 mb-2" />
          <p className="text-gray-700">Loading 3D Model...</p>
        </div>
      </div>
    </Html>
  );
}

// Floating Icons Component with non-overlapping positions
function FloatingIcons() {
  const icons = [
    { icon: <Code size={24} className="text-indigo-500" />, id: 1 },
    { icon: <Server size={24} className="text-blue-500" />, id: 2 },
    { icon: <Database size={24} className="text-purple-500" />, id: 3 },
    { icon: <Cloud size={24} className="text-cyan-500" />, id: 4 },
    { icon: <Smartphone size={24} className="text-green-500" />, id: 5 },
  ];

  // Predefined positions to prevent overlap
  const positions = [
    { top: "20%", left: "15%" },
    { top: "70%", left: "80%" },
    { top: "40%", left: "75%" },
    { top: "60%", left: "20%" },
    { top: "30%", left: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={item.id}
          className="absolute bg-white p-3 rounded-full shadow-lg"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            animation: `float${index % 3} 8s infinite ease-in-out`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-indigo-50 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-100 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-100 blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Floating icons */}
      <FloatingIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Businesses with{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100 z-0"></span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              We deliver cutting-edge technology solutions that drive
              innovation, efficiency, and growth for your business in the
              digital era.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Rocket className="mr-3 h-6 w-6" />
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-lg font-medium transition-all flex items-center">
                Explore Services
                <ChevronRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative h-full min-h-[500px]">
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => window.location.reload()}
            >
              <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                onContextLost={(e) => e.preventDefault()}
              >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={<ModelLoader />}>
                  <LaptopModel />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={2}
                />
              </Canvas>
            </ErrorBoundary>

            {/* Floating badges around the 3D model */}
            <div className="absolute -top-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 z-10 animate-bounce">
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Server className="h-7 w-7 text-indigo-600" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 z-10 animate-bounce delay-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Cpu className="h-7 w-7 text-blue-600" />
              </div>
            </div>
            <div className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-10 animate-bounce delay-500">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Code className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling tech logos */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="flex items-center space-x-16 animate-marquee whitespace-nowrap">
          {[
            "React",
            "Node.js",
            "AWS",
            "Python",
            "Docker",
            "Kubernetes",
            "TensorFlow",
            "GraphQL",
          ].map((tech) => (
            <div
              key={tech}
              className="text-gray-400 font-mono text-xl font-bold"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
