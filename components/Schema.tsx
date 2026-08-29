export default function Schema(){
 const data={
 '@context':'https://schema.org',
 '@type':'RoofingContractor',
 name:'Y&B Roofing Inc.',
 telephone:'+1 773-495-2021',
 address:{
 '@type':'PostalAddress',
 streetAddress:'3314 S Leavitt St',
 addressLocality:'Chicago',
 addressRegion:'IL',
 postalCode:'60608',
 addressCountry:'US'
 },
 aggregateRating:{
 '@type':'AggregateRating',
 ratingValue:'4.9',
 reviewCount:'172'
 }
 };
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>;
}
