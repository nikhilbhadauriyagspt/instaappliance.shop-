// src/config/api.js

// Change this URL when deploying to a live server
const BASE_URL = "https://beige-cormorant-504392.hostingersite.com/backend";

export const API_ENDPOINTS = {
  BOOKING: `${BASE_URL}/api/booking.php`,
  CONTACT: `${BASE_URL}/api/contact.php`,
  NEWSLETTER: `${BASE_URL}/api/newsletter.php`,
  ADMIN_LOGIN: `${BASE_URL}/api/admin_login.php`,
  GET_SUBMISSIONS: `${BASE_URL}/api/get_submissions.php`,
};

export default BASE_URL;
