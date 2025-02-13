const AboutProject = () => {
  return (
    <main className="text-whitish flex items-center justify-center px-5 pt-[66px] pb-10">
      <article className="just border-bgGreen max-w-[700px] rounded-[40px] border border-solid p-12">
        <h1 className="mb-4 font-bold">
          Event Ticket Booking UI – Open Source Practice Project 🎟️
        </h1>
        <p className="mb-3">Overview</p>
        <p className="mb-3">
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <p className="mb-3">
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>
        <section>
          <h2 className="mb-3">Flow & Features</h2>

          <h3 className="mb-3">1️⃣ Ticket Selection</h3>
          <ul className="mb-3 list-disc pl-8">
            <li>Users can browse available tickets (Free & Paid).</li>
            <li>Ticket options are displayed in a list or card view.</li>
            <li>
              For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
              details.
            </li>
            <li>
              For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
              payment modal.
            </li>
          </ul>

          <h3>️2️⃣ Attendee Details Form</h3>
          <ul className="mb-3 list-disc pl-8">
            <li>Users input their Name, Email, and optional Phone Number.</li>
            <li>Profile picture upload option with preview functionality.</li>
            <li>
              Ticket summary is visible to ensure users review their details
              before submission.
            </li>
          </ul>

          <h3>3️⃣ Payment or Success Page</h3>
          <ul className="mb-3 list-disc pl-8">
            <li>
              If the ticket is free, the user is taken directly to the Ticket
              Confirmation Page.
            </li>
            <li>
              If the ticket is paid, developers can integrate Stripe, Paystack,
              or Flutterwave to process payments before showing the confirmation
              page.
            </li>
            <li>Upon successful booking, users should receive:</li>
            <li>A visual ticket preview with a unique QR Code.</li>
            <li>
              An option to download the ticket as PDF or save it to their
              device.
            </li>
            <li>An email confirmation containing ticket details.</li>
          </ul>
        </section>
        <section className="mb-3 pt-3">
          <h3>How to Build This 🚀</h3>
          <p className="mt-2 mb-3">This UI can be implemented using:</p>
          <p>📌 Frontend (Next.js or React)</p>
          <p>Component Breakdown:</p>

          <ul className="mb-3 list-disc pl-8">
            <li>TicketCard.tsx → Displays ticket details</li>
            <li>AttendeeForm.tsx → Captures user details</li>
            <li>PaymentModal.tsx → Handles payment processing</li>
            <li>SuccessScreen.tsx → Shows the final ticket preview</li>
            <li>
              State Management: React’s Context API, Zustand, or Redux (if
              needed).
            </li>
            <li>
              File Handling: Users should be able to upload images (profile
              picture for ticket) using Firebase Storage, Cloudinary, or local
              preview with URL.createObjectURL().
            </li>
          </ul>

          <h4 className="mb-3">📌 Backend (Optional)</h4>
          <ul className="mb-3 list-disc pl-8">
            <li>If persistence is required, a backend can be built using:</li>
            <li>Node.js & Express or Firebase Functions</li>
            <li>
              Database: MongoDB, PostgreSQL, or Firebase Firestore to store
              ticket records
            </li>
          </ul>

          <h4 className="mb-3">📌 Payment Integration</h4>
          <p>For paid events, developers should integrate:</p>
          <ul className="mb-3 list-disc pl-8">
            <li>Stripe Checkout (for international transactions)</li>
            <li>Paystack or Flutterwave (for African users)</li>
          </ul>

          <h4 className="mb-3">What You’ll Learn 🧑‍💻</h4>
          <ul className="mb-3 list-disc pl-8">
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
          </ul>
          <p>Need Help? Reach Out! 💬</p>
        </section>{" "}
      </article>
    </main>
  );
};

export default AboutProject;
