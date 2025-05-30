import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300"
      >
        Let's Connect
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-purple-200">
            Get in touch
          </h3>
          <p className="text-gray-200 mb-8">
            Ready to build something amazing together? Drop me a line and let's
            make it happen.
          </p>

          <div className="flex space-x-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://twitter.com",
                label: "Twitter",
              },
              {
                icon: Mail,
                href: "mailto:hello@purpleorca.dev",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, color: "#a855f7" }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
