import Alpine from 'alpinejs';
import * as Turbo from '@hotwired/turbo'

window.Alpine = Alpine;
Alpine.start();

window.Turbo = Turbo;

function cvForm() {
  return {
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    phone: '',
    birthdate: '',
    job_title: '',
    profile: '',
    template: 1,
    experiences: [{ position: '', company: '', location: '', start_date: '', end_date: '', description: '' }],
    educations: [{ degree: '', institution: '', location: '', start_date: '', end_date: '', description: '' }],
    hobbies: [{ name: '', description: '' }],
    skills: [{ name: '', level: 0 }],

    saveData() {
      localStorage.setItem('cv_data', JSON.stringify({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        city: this.city,
        phone: this.phone,
        birthdate: this.birthdate,
        job_title: this.job_title,
        profile: this.profile,
        template: this.template,
        experiences: this.experiences,
        educations: this.educations,
        hobbies: this.hobbies,
        skills: this.skills
      }));
    },

    loadData() {
      const data = JSON.parse(localStorage.getItem('cv_data'));
      if (data) {
        Object.assign(this, data);
      }
    },

    clearData() {
      localStorage.removeItem('cv_data');
    }
  };
}
