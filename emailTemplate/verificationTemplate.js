const varificationTemplate = info => {
  return `
        <strong>Hello ${info.name}</strong>
        <br>
        <p>Thank you for your interest in our site . We have receive your request</p>
        <a href=${info.link}>Varify</a>
        <br><br>
        <p>${info.link}</p>
    `;
};

module.exports = varificationTemplate;
