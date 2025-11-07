const ejs = require('ejs');
const fs = require('fs');

const template = fs.readFileSync('./views/user/pricing.ejs', 'utf-8');

const pageTitle = 'Custom Pricing | ITBIZONE';

const services = { 
  websiteDevelopment: { 
    subServices: [
      {name: 'Custom Website Design & Development', price: 35000},
      {name: 'E-commerce Development', price: 50000},
      {name: 'Web Application Development', price: 65000}
    ] 
  }, 
  graphicDesign: { 
    subServices: [
      {name: 'Logo & Brand Identity Design', price: 25000},
      {name: 'Brochure, Flyer & Poster Design', price: 12000}
    ] 
  }, 
  digitalMarketing: { 
    subServices: [
      {name: 'Search Engine Optimization (SEO)', price: 30000},
      {name: 'Search Engine Marketing (SEM)', price: 35000}
    ] 
  }, 
  socialMediaManagement: { 
    subServices: [
      {name: 'Social Media Strategy Development', price: 15000},
      {name: 'Account Setup & Optimization', price: 10000}
    ] 
  }
};

console.log('Rendering template with test services...');

try {
  const html = ejs.render(template, {services: services, pageTitle: pageTitle}, {filename: './views/user/pricing.ejs'});
  const lines = html.split('\n');
  
  let dataAttrCount = 0;
  let checkboxCount = 0;
  
  for(let i = 0; i < lines.length; i++) {
    if(lines[i].includes('data-price')) {
      dataAttrCount++;
      console.log('✓ Found data-price attribute at line', i+1);
      if(dataAttrCount <= 3) {
        console.log('  ', lines[i].trim());
      }
    }
    if(lines[i].includes('service-checkbox')) {
      checkboxCount++;
    }
  }
  
  console.log('\nTotal data-price attributes found:', dataAttrCount);
  console.log('Total service-checkbox inputs found:', checkboxCount);
  
  if(dataAttrCount > 0) {
    console.log('✓ Template is rendering data-price attributes correctly!');
  } else {
    console.log('✗ ERROR: No data-price attributes found! Check template rendering.');
  }
  
} catch(err) {
  console.error('✗ Error rendering template:', err.message);
}
