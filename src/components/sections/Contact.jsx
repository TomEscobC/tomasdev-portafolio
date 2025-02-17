import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from  "emailjs-com"
import { useState } from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const SERVICE_ID = "service_f5jdwc5";
    const TEMPLATE_ID = "template_f6oq3ca";
    const PUBLIC_KEY = "3Zows84Ed6fW0wM5a";
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Mensaje enviado con éxito.");
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Error al enviar mensaje. Por favor intente otra vez."))
    }

    return <section id="contact" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    Contacto 
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5" placeholder="Nombre" onChange={(e) => setFormData({...formData, name: e.target.value })}/>
                    </div>

                    <div className="relative">
                        <textarea type="text" id="email" name="name" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5" placeholder="Correo" onChange={(e) => setFormData({...formData, email: e.target.value })}/>
                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" required value={formData.message} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5" placeholder="Ingrese su mensaje..." onChange={(e) => setFormData({...formData, message: e.target.value })}/>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Enviar Mensaje
                    </button>
                </form>

            </div>
        </RevealOnScroll>
    </section>
}