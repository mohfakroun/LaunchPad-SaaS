import React from "react";
import { AiFillBug } from "react-icons/ai";
import {
  FiCheck,
  FiAlertCircle, 
  FiDatabase,
  FiServer,
  FiUsers,
  FiLock,
  FiSend,
  FiMoreVertical,
  FiClock
} from "react-icons/fi";
import { motion } from "framer-motion";


const IssuesComponent = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-md border-2 border-zinc-900 bg-red-100 p-1.5">
            <AiFillBug className="text-red-900" />
          </div>
          <div>
            <span className="block text-sm font-bold uppercase tracking-tight text-zinc-900">
              Bug Report
            </span>
            <span className="text-xs text-zinc-500">#2847</span>
          </div>
        </div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-md border-2 border-zinc-900 bg-yellow-100 px-2.5 py-1 text-xs font-bold uppercase text-yellow-900 shadow-[2px_2px_0_0_rgba(24,24,27,1)]"
        >
          In Progress
        </motion.div>
      </div>

      <p className="mb-3 text-lg font-bold leading-tight text-zinc-900">
        Bot crawlers causing latency issues
      </p>

      <p className="mb-6 text-sm leading-relaxed text-zinc-600">
        Multiple bot crawlers are hitting the API simultaneously, causing response times to spike above 3s during peak hours.
      </p>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-700">Progress</span>
          <span className="text-zinc-500">60%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full border-2 border-zinc-900 bg-zinc-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-zinc-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-zinc-100 p-3 rounded-md">
          <div className="mb-1 flex items-center gap-1.5 text-xs text-zinc-500">
            <FiClock className="text-sm" />
            <span className="font-light uppercase">Priority</span>
          </div>
          <span className="text-sm font-light text-zinc-900">High</span>
        </div>
        
        <div className="rounded-md bg-zinc-100 p-3">
          <div className="mb-1 flex items-center gap-1.5 text-xs text-zinc-500">
            <FiAlertCircle className="text-sm" />
            <span className="font-light uppercase">Due Date</span>
          </div>
          <span className="text-sm font-light text-zinc-900">Feb 12</span>
        </div>
      </div>
    </div>
  );
};


const ApiMonitoring = () => {
  const endpoints = [
    {
      id: 1,
      method: "GET",
      path: "/api/users",
      status: "active",
      responseTime: "45ms",
    },
    {
      id: 2,
      method: "POST",
      path: "/api/auth/login",
      status: "warning",
      responseTime: "320ms",
    },
    {
      id: 3,
      method: "PUT",
      path: "/api/users/{id}",
      status: "warning",
      responseTime: "607ms",
    },
    {
      id: 4,
      method: "DELETE",
      path: "/api/users/{id}",
      status: "warning",
      responseTime: "52ms",
    }
  ];

  const getMethodColor = (method) => {
    switch (method) {
      case "GET":
        return "bg-blue-100 text-blue-900 border-blue-900";
      case "POST":
        return "bg-green-100 text-green-900 border-green-900";
      case "PUT":
        return "bg-yellow-100 text-yellow-900 border-yellow-900";
      case "DELETE":
        return "bg-red-100 text-red-900 border-red-900";
      default:
        return "bg-zinc-100 text-zinc-900 border-zinc-900";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <FiCheck className="text-green-600" />;
      case "warning":
        return <FiAlertCircle className="text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900">API Endpoints</h3>
        <p className="text-sm text-zinc-500">5 endpoints • All systems operational</p>
      </div>

      <div className="space-y-3">
        {endpoints.map((endpoint, index) => (
          <motion.div
            key={endpoint.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`group rounded-lg border-2 border-zinc-900 bg-white p-4 shadow-[3px_3px_0_0_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(24,24,27,1)] ${
              endpoint.status === "deprecated" ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className={`shrink-0 rounded-md border-2 px-2 py-1 text-xs font-bold uppercase ${getMethodColor(
                    endpoint.method
                  )}`}
                >
                  {endpoint.method}
                </span>
                <code className="truncate text-sm font-mono font-medium text-zinc-900">
                  {endpoint.path}
                </code>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-xs text-zinc-500">{endpoint.responseTime}</span>
                <div className="flex h-6 w-6 items-center justify-center">
                  {getStatusIcon(endpoint.status)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Legend */}
      <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <FiCheck className="text-green-600" />
          <span>Active</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiClock className="text-yellow-600" />
          <span>Beta</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiAlertCircle className="text-red-600" />
          <span>Deprecated</span>
        </div>
      </div>
    </div>
  );
};






const SystemDesignComponent = () => {
  return (
    <div className="relative h-full w-full p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900">System Architecture</h3>
        <p className="text-sm text-zinc-500">Microservices infrastructure</p>
      </div>


      <div className="relative flex h-[300px] items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-zinc-900 bg-blue-100 shadow-[3px_3px_0_0_rgba(24,24,27,1)]">
              <FiUsers className="text-2xl" />
            </div>
            <span className="text-xs font-light text-zinc-900">Client</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="h-0.5 w-12 origin-left bg-zinc-900"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-zinc-900 bg-white shadow-[3px_3px_0_0_rgba(24,24,27,1)]">
              <FiLock className="text-2xl" />
            </div>
            <span className="text-xs font-light text-zinc-900">Gateway</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="h-0.5 w-12 origin-left bg-zinc-900"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-zinc-900 bg-white shadow-[3px_3px_0_0_rgba(24,24,27,1)]">
              <FiServer className="text-2xl" />
            </div>
            <span className="text-xs font-light text-zinc-900">Services</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="h-0.5 w-12 origin-left bg-zinc-900"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col items-center group gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-900 bg-blue-100 shadow-[3px_3px_0_0_rgba(24,24,27,1)]">
              <FiDatabase className="text-2xl" />
            </div>
            <span className="text-xs font-light text-zinc-900">Database</span>
          </div>
        </motion.div>
      </div>

    </div>
  );
};







const Chat = () => {
  const messages = [
    {
      id: 1,
      author: "Jimmy N.",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Sarah&backgroundColor=b6e3f4",
      message: "Hey team! Just pushed the new API endpoints to staging.",
      time: "10:24 AM",
      isOwn: false,
    },
    {
      id: 2,
      author: "You",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=backgroundColor=c0aede",
      message: "Perfect timing! I will test them now.",
      time: "10:26 AM",
      isOwn: true,
    }
  ];

  return (
    <div className="relative flex h-full flex-col p-4">
      <div className="mb-4 flex items-center justify-between border-b-[1px] border-zinc-200 pb-3">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-sm font-light text-zinc-900">Team Chat</p>
            <p className="text-xs text-zinc-500">3 members online</p>
          </div>
        </div>
        <button className="rounded-lg border-2 border-zinc-900 bg-white p-1.5 shadow-[2px_2px_0_0_rgba(24,24,27,1)] transition-all hover:shadow-[0px_0px_0_0_rgba(24,24,27,1)]">
          <FiMoreVertical className="text-sm" />
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
          >
            <img
              src={msg.avatar}
              alt={msg.author}
              className="h-8 w-8 shrink-0 rounded-lg border border-zinc-900"
            />

            <div className={`flex flex-col ${msg.isOwn ? "items-end" : ""}`}>
              <div className="mb-1 flex items-center gap-2">
                <p className="text-xs font-semibold text-zinc-900">
                  {msg.author}
                </p>
                <span className="text-xs text-zinc-400">{msg.time}</span>
              </div>
              <div
                className={`max-w-[200px] rounded-md border-2 border-zinc-900 px-3 py-2 text-sm  ${
                  msg.isOwn
                    ? "bg-zinc-200"
                    : "bg-white text-zinc-900"
                }`}
              >
                {msg.message}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex gap-2 border-t-2 border-zinc-200 pt-3">
        <input
          type="text"
          placeholder="Type..."
          className="flex-1 rounded-lg border border-zinc-900 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500"
        />
        <button className="flex items-center justify-center rounded-lg border border-zinc-900 bg-zinc-500 px-3 py-2 shadow-[3px_3px_0_0_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
          <FiSend className="text-white" />
        </button>
      </div>
    </div>
  );
};




export const data = [
  {
    id: 1,
    title: "Issue Tracking",
    Component: IssuesComponent,
    cardTitle: "Title for Issues feature",
    cardSubtitle:
      "Explain what the Issues feature does and why it's different or better than your competitors.",
  },
  {
    id: 2,
    title: "API Monitoring",
    Component: ApiMonitoring,
    cardTitle: "Title for API Monitoring feature",
    cardSubtitle:
      "Explain what the API Monitoring feature does and why it's different or better than your competitors.",
  },
  {
    id: 3,
    title: "Architecture Visualisation",
    Component: SystemDesignComponent,
    cardTitle: "Title for Architecture Visualisation feature",
    cardSubtitle:
      "Explain what the Architecture Visualisation feature and why it's different or better than your competitors.",
  },
  {
    id: 4,
    title: "Live Chat",
    Component: Chat,
    cardTitle: "Title for Live Chat feature",
    cardSubtitle:
      "Explain what the Live Chat feature does and why it's different or better than your competitors.",
  },
];
