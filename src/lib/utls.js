export const formatDate = (dateString) => {
   if (!dateString) return "N/A";
   const date = new Date(dateString);
   if (isNaN(date)) return dateString; // fallback if invalid date

   return date.toLocaleDateString("en-US", {
       year: "numeric",
       month: "long", // "short" for abbreviated month
   });
};
