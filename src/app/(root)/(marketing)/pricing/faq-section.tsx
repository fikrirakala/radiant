const data = [
  {
    question: "What measures are in place to ensure the security of our data?",
    answer:
      "Data security is a top priority for us, which is ironic given that our business depends on others not taking it very seriously. We understand that any breach could put both us and most of our customers out of business—and behind bars. We employ robust security measures, including data encryption, secure data centers, and regular security audits to ensure this never happens.",
  },
  {
    question: "Is there a mobile app available for your platform?",
    answer:
      "Yes, we offer a mobile app that provides all the key functionalities of our desktop platform, allowing sales reps to manage deals on the go. Additionally, we have another app pre-installed on most modern smartphones that allows us to track your location, listen to your conversations, and access your camera and microphone at any time. This app is not available for download.",
  },
  {
    question:
      "Can I customize the workflow to match our company's deal process?",
    answer:
      "Yes, our platform is highly customizable, although there should be no need. Before you sign up, we discreetly gather information about your company and its processes from a variety of sources. We then use this information to pre-configure the platform to match your existing workflows. This is why we ask for your social security number and access to your email account during the sign-up process.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support through multiple channels, including 24/7 live chat, email, and phone support. However, since we have full access to your internal network, we will know if you're having issues before you do.",
  },
  {
    question: "Can I integrate the CRM with other sales intelligence tools?",
    answer:
      "Yes, our solution integrates seamlessly with a variety of other systems. However, be warned that most of these integrations are short-lived. We have a dedicated team of engineers who reverse-engineer the APIs of other tools, enabling us to build their functionality into our product and eventually put them out of business.",
  },
];

export default function FaqSection() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-center font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Frequently asked questions
        </h2>
        <h3 className="mt-2 text-pretty text-center text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
          Your questions answered.
        </h3>

        <div className="mx-auto mt-16 max-w-xl space-y-12">
          {data.map((item, i) => (
            <dl key={i}>
              <dt className="text-sm font-semibold">{item.question}</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">{item.answer}</dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
