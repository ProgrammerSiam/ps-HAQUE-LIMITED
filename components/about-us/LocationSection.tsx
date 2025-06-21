import React from "react";

const LocationSection = () => {
    return (
        <section className="!pb-0">
            <div className="w-full h-[478px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29211.71738581826!2d90.399629!3d23.766462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c763b77905af%3A0xd6575d0f25b5c66d!2sHaque%20Food%20Industries%20Limited!5e0!3m2!1sen!2sus!4v1742865382234!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
};

export default LocationSection;
