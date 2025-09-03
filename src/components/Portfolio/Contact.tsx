import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com"
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    subject:"",
    message:""
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_6ly3cpm",
        "template_gctzybq",
        {
          from_name:`${formData.firstName} ${formData.lastName}`,
          from_email:formData.email,
          subject:formData.subject,
          message:formData.message
        },
        "8TPs7Zr-OClpl54_t"
      )
      .then(
        ()=>{
          setStatus("Message sent Successfully")
          setFormData({firstName:"",lastName:"",email:"",subject:"",message:""})
          setLoading(false);
        }
      )
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something extraordinary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="animate-fade-in-left">
            <div className="glass p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Hemrajjangid27747@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 7999348179</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Indore, MP</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-8 border-t border-glass-border">
                <p className="font-medium mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-xl hover-glow transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-xl hover-glow transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="mailto:Hemrajjangid27747@gmail.com"
                    className="glass p-3 rounded-xl hover-glow transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First"
                    required
                    className="glass border-glass-border bg-glass/50 focus:bg-glass focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="glass border-glass-border bg-glass/50 focus:bg-glass focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="glass border-glass-border bg-glass/50 focus:bg-glass focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration , Job Offer"
                  required
                  className="glass border-glass-border bg-glass/50 focus:bg-glass focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="glass border-glass-border bg-glass/50 focus:bg-glass focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary py-6 rounded-2xl"
              >
                {loading ? "Sending...": "Send Message"}
              </Button>
              {status && <p className="text-center mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;