const generateEmailOption = ({ to, subject, template }) => {
  return {
    from: '"Golam rabbi" <grabbi96@gmail.com>',
    to,
    subject,
    html: template
  };
};

module.exports = generateEmailOption;
