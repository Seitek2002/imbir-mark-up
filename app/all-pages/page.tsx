import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-foreground">Все страницы (125)</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl bg-surface p-5">
          <h2 className="mb-3 text-lg font-semibold text-foreground">/</h2>
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link href="/" className="text-secondary hover:text-primary">
                /
              </Link>
            </li>
            <li>
              <Link href="//blog" className="text-secondary hover:text-primary">
                //blog
              </Link>
            </li>
            <li>
              <Link href="//blog/example" className="text-secondary hover:text-primary">
                //blog/[slug]
              </Link>
            </li>
            <li>
              <Link href="//chat" className="text-secondary hover:text-primary">
                //chat
              </Link>
            </li>
            <li>
              <Link href="//chat/ai" className="text-secondary hover:text-primary">
                //chat/ai
              </Link>
            </li>
            <li>
              <Link href="//chat/list" className="text-secondary hover:text-primary">
                //chat/list
              </Link>
            </li>
            <li>
              <Link href="//chat/summary-modal" className="text-secondary hover:text-primary">
                //chat/summary-modal
              </Link>
            </li>
            <li>
              <Link href="//city-confirm" className="text-secondary hover:text-primary">
                //city-confirm
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile" className="text-secondary hover:text-primary">
                //clinic-profile
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/appointments" className="text-secondary hover:text-primary">
                //clinic-profile/appointments
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/basic-info" className="text-secondary hover:text-primary">
                //clinic-profile/basic-info
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/basic-info/edit" className="text-secondary hover:text-primary">
                //clinic-profile/basic-info/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/basic-info/edit/save-modal" className="text-secondary hover:text-primary">
                //clinic-profile/basic-info/edit/save-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/doctor-invitations" className="text-secondary hover:text-primary">
                //clinic-profile/doctor-invitations
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/equipment" className="text-secondary hover:text-primary">
                //clinic-profile/equipment
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/equipment/edit" className="text-secondary hover:text-primary">
                //clinic-profile/equipment/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/invites" className="text-secondary hover:text-primary">
                //clinic-profile/invites
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/legal" className="text-secondary hover:text-primary">
                //clinic-profile/legal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/legal/edit" className="text-secondary hover:text-primary">
                //clinic-profile/legal/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/location" className="text-secondary hover:text-primary">
                //clinic-profile/location
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/location/edit" className="text-secondary hover:text-primary">
                //clinic-profile/location/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/logout-modal" className="text-secondary hover:text-primary">
                //clinic-profile/logout-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/menu" className="text-secondary hover:text-primary">
                //clinic-profile/menu
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures" className="text-secondary hover:text-primary">
                //clinic-profile/procedures
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/1" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/[id]
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/1/delete-modal" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/[id]/delete-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/1/edit" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/[id]/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/1/edit/add-specialist-modal" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/[id]/edit/add-specialist-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/delete-modal" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/delete-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/procedures/new" className="text-secondary hover:text-primary">
                //clinic-profile/procedures/new
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/reviews" className="text-secondary hover:text-primary">
                //clinic-profile/reviews
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/schedule" className="text-secondary hover:text-primary">
                //clinic-profile/schedule
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/schedule/edit" className="text-secondary hover:text-primary">
                //clinic-profile/schedule/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists" className="text-secondary hover:text-primary">
                //clinic-profile/specialists
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/basic-info" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/basic-info
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/basic-info/edit" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/basic-info/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/certificates" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/certificates
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/certificates/edit" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/certificates/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/delete-modal" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/delete-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/education" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/education
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/education/edit" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/education/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/professional" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/professional
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/1/professional/edit" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/[id]/professional/edit
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/delete-modal" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/delete-modal
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialists/new" className="text-secondary hover:text-primary">
                //clinic-profile/specialists/new
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialization" className="text-secondary hover:text-primary">
                //clinic-profile/specialization
              </Link>
            </li>
            <li>
              <Link href="//clinic-profile/specialization/edit" className="text-secondary hover:text-primary">
                //clinic-profile/specialization/edit
              </Link>
            </li>
            <li>
              <Link href="//clinics" className="text-secondary hover:text-primary">
                //clinics
              </Link>
            </li>
            <li>
              <Link href="//clinics/1" className="text-secondary hover:text-primary">
                //clinics/[id]
              </Link>
            </li>
            <li>
              <Link href="//clinics/1/contacts-modal" className="text-secondary hover:text-primary">
                //clinics/[id]/contacts-modal
              </Link>
            </li>
            <li>
              <Link href="//clinics/1/photo-modal" className="text-secondary hover:text-primary">
                //clinics/[id]/photo-modal
              </Link>
            </li>
            <li>
              <Link href="//clinics/1/reviews" className="text-secondary hover:text-primary">
                //clinics/[id]/reviews
              </Link>
            </li>
            <li>
              <Link href="//clinics/filters-modal" className="text-secondary hover:text-primary">
                //clinics/filters-modal
              </Link>
            </li>
            <li>
              <Link href="//confirm-modal" className="text-secondary hover:text-primary">
                //confirm-modal
              </Link>
            </li>
            <li>
              <Link href="//consultation/1" className="text-secondary hover:text-primary">
                //consultation/[id]
              </Link>
            </li>
            <li>
              <Link href="//consultation/1/finished" className="text-secondary hover:text-primary">
                //consultation/[id]/finished
              </Link>
            </li>
            <li>
              <Link href="//consultation/1/setup" className="text-secondary hover:text-primary">
                //consultation/[id]/setup
              </Link>
            </li>
            <li>
              <Link href="//contacts" className="text-secondary hover:text-primary">
                //contacts
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile" className="text-secondary hover:text-primary">
                //doctor-profile
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/appointments" className="text-secondary hover:text-primary">
                //doctor-profile/appointments
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/appointments/summary-modal" className="text-secondary hover:text-primary">
                //doctor-profile/appointments/summary-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/invitations" className="text-secondary hover:text-primary">
                //doctor-profile/invitations
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/logout-modal" className="text-secondary hover:text-primary">
                //doctor-profile/logout-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data" className="text-secondary hover:text-primary">
                //doctor-profile/my-data
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/basic" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/basic
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/documents" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/documents
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/edit" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/edit
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/education" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/education
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/photo-modal" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/photo-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/professional" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/professional
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/my-data/save-modal" className="text-secondary hover:text-primary">
                //doctor-profile/my-data/save-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/patients" className="text-secondary hover:text-primary">
                //doctor-profile/patients
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/reviews" className="text-secondary hover:text-primary">
                //doctor-profile/reviews
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/reviews/complaint-modal" className="text-secondary hover:text-primary">
                //doctor-profile/reviews/complaint-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/reviews/reply-modal" className="text-secondary hover:text-primary">
                //doctor-profile/reviews/reply-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/schedule" className="text-secondary hover:text-primary">
                //doctor-profile/schedule
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/schedule/save-modal" className="text-secondary hover:text-primary">
                //doctor-profile/schedule/save-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/services" className="text-secondary hover:text-primary">
                //doctor-profile/services
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/services/add-modal" className="text-secondary hover:text-primary">
                //doctor-profile/services/add-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/services/delete-modal" className="text-secondary hover:text-primary">
                //doctor-profile/services/delete-modal
              </Link>
            </li>
            <li>
              <Link href="//doctor-profile/services/edit-modal" className="text-secondary hover:text-primary">
                //doctor-profile/services/edit-modal
              </Link>
            </li>
            <li>
              <Link href="//forgot-password" className="text-secondary hover:text-primary">
                //forgot-password
              </Link>
            </li>
            <li>
              <Link href="//forgot-password/code" className="text-secondary hover:text-primary">
                //forgot-password/code
              </Link>
            </li>
            <li>
              <Link href="//forgot-password/new-password" className="text-secondary hover:text-primary">
                //forgot-password/new-password
              </Link>
            </li>
            <li>
              <Link href="//forgot-password/success" className="text-secondary hover:text-primary">
                //forgot-password/success
              </Link>
            </li>
            <li>
              <Link href="//login" className="text-secondary hover:text-primary">
                //login
              </Link>
            </li>
            <li>
              <Link href="//privacy" className="text-secondary hover:text-primary">
                //privacy
              </Link>
            </li>
            <li>
              <Link href="//profile" className="text-secondary hover:text-primary">
                //profile
              </Link>
            </li>
            <li>
              <Link href="//profile/history" className="text-secondary hover:text-primary">
                //profile/history
              </Link>
            </li>
            <li>
              <Link href="//profile/my-data" className="text-secondary hover:text-primary">
                //profile/my-data
              </Link>
            </li>
            <li>
              <Link href="//profile/reviews" className="text-secondary hover:text-primary">
                //profile/reviews
              </Link>
            </li>
            <li>
              <Link href="//profile/saved" className="text-secondary hover:text-primary">
                //profile/saved
              </Link>
            </li>
            <li>
              <Link href="//record" className="text-secondary hover:text-primary">
                //record
              </Link>
            </li>
            <li>
              <Link href="//record/success-modal" className="text-secondary hover:text-primary">
                //record/success-modal
              </Link>
            </li>
            <li>
              <Link href="//register" className="text-secondary hover:text-primary">
                //register
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-1" className="text-secondary hover:text-primary">
                //register/clinic/step-1
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-2" className="text-secondary hover:text-primary">
                //register/clinic/step-2
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-3" className="text-secondary hover:text-primary">
                //register/clinic/step-3
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-4" className="text-secondary hover:text-primary">
                //register/clinic/step-4
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-5" className="text-secondary hover:text-primary">
                //register/clinic/step-5
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-6" className="text-secondary hover:text-primary">
                //register/clinic/step-6
              </Link>
            </li>
            <li>
              <Link href="//register/clinic/step-7" className="text-secondary hover:text-primary">
                //register/clinic/step-7
              </Link>
            </li>
            <li>
              <Link href="//register/doctor/step-1" className="text-secondary hover:text-primary">
                //register/doctor/step-1
              </Link>
            </li>
            <li>
              <Link href="//register/doctor/step-2" className="text-secondary hover:text-primary">
                //register/doctor/step-2
              </Link>
            </li>
            <li>
              <Link href="//register/doctor/step-3" className="text-secondary hover:text-primary">
                //register/doctor/step-3
              </Link>
            </li>
            <li>
              <Link href="//register/doctor/step-4" className="text-secondary hover:text-primary">
                //register/doctor/step-4
              </Link>
            </li>
            <li>
              <Link href="//register/patient/phone" className="text-secondary hover:text-primary">
                //register/patient/phone
              </Link>
            </li>
            <li>
              <Link href="//register/patient/phone-code" className="text-secondary hover:text-primary">
                //register/patient/phone-code
              </Link>
            </li>
            <li>
              <Link href="//register/patient/step-1" className="text-secondary hover:text-primary">
                //register/patient/step-1
              </Link>
            </li>
            <li>
              <Link href="//register/patient/step-2" className="text-secondary hover:text-primary">
                //register/patient/step-2
              </Link>
            </li>
            <li>
              <Link href="//register/verify" className="text-secondary hover:text-primary">
                //register/verify
              </Link>
            </li>
            <li>
              <Link href="//search" className="text-secondary hover:text-primary">
                //search
              </Link>
            </li>
            <li>
              <Link href="//search-modal" className="text-secondary hover:text-primary">
                //search-modal
              </Link>
            </li>
            <li>
              <Link href="//search-modal/suggestions" className="text-secondary hover:text-primary">
                //search-modal/suggestions
              </Link>
            </li>
            <li>
              <Link href="//search/categories" className="text-secondary hover:text-primary">
                //search/categories
              </Link>
            </li>
            <li>
              <Link href="//services" className="text-secondary hover:text-primary">
                //services
              </Link>
            </li>
            <li>
              <Link href="//specialists" className="text-secondary hover:text-primary">
                //specialists
              </Link>
            </li>
            <li>
              <Link href="//specialists/1" className="text-secondary hover:text-primary">
                //specialists/[id]
              </Link>
            </li>
            <li>
              <Link href="//specialists/1/review-modal" className="text-secondary hover:text-primary">
                //specialists/[id]/review-modal
              </Link>
            </li>
            <li>
              <Link href="//specialists/1/reviews" className="text-secondary hover:text-primary">
                //specialists/[id]/reviews
              </Link>
            </li>
            <li>
              <Link href="//specialists/dropdown-open" className="text-secondary hover:text-primary">
                //specialists/dropdown-open
              </Link>
            </li>
            <li>
              <Link href="//specialists/filters-modal" className="text-secondary hover:text-primary">
                //specialists/filters-modal
              </Link>
            </li>
            <li>
              <Link href="//terms" className="text-secondary hover:text-primary">
                //terms
              </Link>
            </li>
            <li>
              <Link href="//videos" className="text-secondary hover:text-primary">
                //videos
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
