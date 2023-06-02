import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // Admin Modules

  {
    path: '',
    title: 'Tableau de bord',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/dashboard/main',
        title: 'Administration',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/dashboard2',
        title: 'Finances',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/dashboard/teacher-dashboard',
        title: 'MENUITEMS.DASHBOARD.LIST.TEACHER-DASHBOARD',
        iconType: 'material-icons-two-tone',
        icon: '',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/student-dashboard',
        title: 'MENUITEMS.DASHBOARD.LIST.STUDENT-DASHBOARD',
        iconType: 'material-icons-two-tone',
        icon: '',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Enseignants',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/teachers/all-teachers',
        title: "Liste d'enseignants",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/teachers/add-teacher',
        title: "Ajout d'un enseignant",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/teachers/edit-teacher',
        title: 'MENUITEMS.TEACHERS.LIST.EDIT-TEACHER',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/teachers/about-teacher',
        title: 'MENUITEMS.TEACHERS.LIST.ABOUT-TEACHER',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Etudiants',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/students/all-students',
        title: 'Liste d\'étudiants',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/students/add-student',
        title: "Ajout d'un étudiant",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/students/edit-student',
        title: 'MENUITEMS.STUDENTS.LIST.EDIT-STUDENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/students/about-student',
        title: 'MENUITEMS.STUDENTS.LIST.ABOUT-STUDENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/students/student-attendance',
        title: 'MENUITEMS.STUDENTS.LIST.STUDENT-ATTENDANCE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Cours',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/courses/all-courses',
        title: 'Liste des cours',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/courses/add-course',
        title: "Ajout d'un cours",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/courses/edit-course',
        title: 'MENUITEMS.COURSES.LIST.EDIT-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/courses/about-course',
        title: 'MENUITEMS.COURSES.LIST.ABOUT-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Librairie',
    iconType: 'material-icons-two-tone',
    icon: 'local_library',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/library/all-assets',
        title: 'Liste des librairies',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/library/add-asset',
        title: "Ajout d'une librairie",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/library/edit-asset',
        title: 'MENUITEMS.LIBRARY.LIST.EDIT-LIBRARY',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Departements',
    iconType: 'material-icons-two-tone',
    icon: 'lan',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/departements/all-departements',
        title: 'Liste des departements',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/departements/add-departement',
        title: "Ajout d'un departement",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/departements/edit-departement',
        title: 'MENUITEMS.DEPARTMENTS.LIST.EDIT-DEPARTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Etablissements',
    iconType: 'material-icons-two-tone',
    icon: 'business',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/etablissements/all-etablissements',
        title: "Liste d'établissements",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/etablissements/add-etablissement',
        title: "Ajout d'un établissement",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },

  {
    path: '',
    title: 'Universités',
    iconType: 'material-icons-two-tone',
    icon: 'business',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/university/all-universities',
        title: "Liste d'universités",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/university/add-university',
        title: "Ajout d'une université",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.STAFF.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'face',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/staff/all-staff',
        title: 'MENUITEMS.STAFF.LIST.ALL-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/staff/add-staff',
        title: 'MENUITEMS.STAFF.LIST.ADD-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/staff/edit-staff',
        title: 'MENUITEMS.STAFF.LIST.EDIT-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/staff/about-staff',
        title: 'MENUITEMS.STAFF.LIST.ABOUT-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Vacances',
    iconType: 'material-icons-two-tone',
    icon: 'airline_seat_individual_suite',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/holidays/all-holidays',
        title: 'Liiste des vacances',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/holidays/add-holiday',
        title: "Nouvelle vacance",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
     /* {
        path: '/admin/holidays/edit-holiday',
        title: 'MENUITEMS.HOLIDAY.LIST.EDIT-HOLIDAY',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  {
    path: '',
    title: 'Inscriptions',
    iconType: 'material-icons-two-tone',
    icon: 'monetization_on',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/fees/all-fees',
        title: "Frais d'inscription",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/inscriptions/all-inscriptions',
        title: "Liste des inscriptions",
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/fees/add-fees',
        title: 'Nouvelle inscription',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      /*{
        path: '/admin/fees/edit-fees',
        title: 'MENUITEMS.FEES.LIST.EDIT-FEES',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/fees/fee-receipt',
        title: 'MENUITEMS.FEES.LIST.FEE-RECEIPT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },*/
    ],
  },
  /*
  {
    path: '',
    title: 'MENUITEMS.ATTENDANCE.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'history_edu',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/attendance/staff',
        title: 'MENUITEMS.ATTENDANCE.LIST.STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
      {
        path: '/admin/attendance/details',
        title: 'MENUITEMS.ATTENDANCE.LIST.DETAILS',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
      {
        path: '/admin/attendance/attendance-sheet',
        title: 'MENUITEMS.ATTENDANCE.LIST.SHEET',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
    ],
  },
*/
  // Teacher Modules

  {
    path: '/teacher/dashboard',
    title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/lectures',
    title: 'MENUITEMS.TEACHER.LIST.LECTURES',
    iconType: 'material-icons-two-tone',
    icon: 'menu_book',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/leave-request',
    title: 'MENUITEMS.TEACHER.LIST.LEAVE-REQUEST',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/exam-schedule',
    title: 'MENUITEMS.TEACHER.LIST.EXAM-SCHEDULE',
    iconType: 'material-icons-two-tone',
    icon: 'history_edu',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/settings',
    title: 'MENUITEMS.TEACHER.LIST.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },

  // Student Modules

  {
    path: '/student/dashboard',
    title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/homework',
    title: 'Devoirs',
    iconType: 'material-icons-two-tone',
    icon: 'article',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/leave-request',
    title: 'Demande de congé',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/timetable',
    title: 'Emploi du temps',
    iconType: 'material-icons-two-tone',
    icon: 'table_chart',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '',
    title: 'Applications',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
  {
    path: 'task',
    title: 'Taches',
    iconType: 'material-icons-two-tone',
    icon: 'fact_check',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
  {
    path: 'calendar',
    title: 'Aganda',
    iconType: 'material-icons-two-tone',
    icon: 'event_note',
    class: '',
    groupTitle: false,
    badge: 'New',
    badgeClass: 'badge bg-blue sidebar-badge float-end',
    role: ['All'],
    submenu: [],
  },
  {
    path: 'contacts',
    title: 'MENUITEMS.CONTACTS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'contacts',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
  {
    path: '/student/settings',
    title: 'MENUITEMS.STUDENT.LIST.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  // Common Module
  /*
  {
    path: '',
    title: 'MENUITEMS.APPS.TEXT',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  {
    path: '',
    title: 'Email',
    iconType: 'material-icons-two-tone',
    icon: 'email',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [
      {
        path: '/email/inbox',
        title: 'Inbox',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/email/compose',
        title: 'Compose',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/email/read-mail',
        title: 'Read Email',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'More Apps',
    iconType: 'material-icons-two-tone',
    icon: 'stars',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '5',
    badgeClass: 'badge bg-orange sidebar-badge float-end',
    role: ['All'],
    submenu: [
      {
        path: '/apps/chat',
        title: 'Chat',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/apps/dragdrop',
        title: 'Drag & Drop',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/apps/contact-grid',
        title: 'Contact Grid',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/apps/support',
        title: 'Support',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Widgets',
    iconType: 'material-icons-two-tone',
    icon: 'widgets',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/widget/chart-widget',
        title: 'Chart Widget',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/widget/data-widget',
        title: 'Data Widget',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Components',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },
  {
    path: '',
    title: 'User Interface (UI)',
    iconType: 'material-icons-two-tone',
    icon: 'dvr',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/ui/alerts',
        title: 'Alerts',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/badges',
        title: 'Badges',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/chips',
        title: 'Chips',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/modal',
        title: 'Modal',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/buttons',
        title: 'Buttons',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/expansion-panel',
        title: 'Expansion Panel',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/bottom-sheet',
        title: 'Bottom Sheet',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/dialogs',
        title: 'Dialogs',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/cards',
        title: 'Cards',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/labels',
        title: 'Labels',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/list-group',
        title: 'List Group',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/snackbar',
        title: 'Snackbar',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/preloaders',
        title: 'Preloaders',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/progressbars',
        title: 'Progress Bars',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/tabs',
        title: 'Tabs',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/typography',
        title: 'Typography',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/ui/helper-classes',
        title: 'Helper Classes',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Forms',
    iconType: 'material-icons-two-tone',
    icon: 'subtitles',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/forms/form-controls',
        title: 'Form Controls',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/forms/advance-controls',
        title: 'Advanced Controls',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/forms/form-example',
        title: 'Form Examples',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/forms/form-validation',
        title: 'Form Validation',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/forms/wizard',
        title: 'Form Wizard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/forms/editors',
        title: 'Editors',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Tables',
    iconType: 'material-icons-two-tone',
    icon: 'view_list',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/tables/basic-tables',
        title: 'Basic Tables',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/tables/material-tables',
        title: 'Material Tables',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/tables/ngx-datatable',
        title: 'ngx-datatable',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Medias',
    iconType: 'material-icons-two-tone',
    icon: 'image_search',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/media/gallery',
        title: 'Image Gallery',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Charts',
    iconType: 'material-icons-two-tone',
    icon: 'insert_chart',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '7',
    badgeClass: 'badge bg-green sidebar-badge float-end',
    role: ['Admin'],
    submenu: [
      {
        path: '/charts/echart',
        title: 'Echart',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/charts/apex',
        title: 'Apex',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/charts/chartjs',
        title: 'ChartJS',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/charts/ngx-charts',
        title: 'Ngx-Charts',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/charts/gauge',
        title: 'Gauge',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Timeline',
    iconType: 'material-icons-two-tone',
    icon: 'timeline',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/timeline/timeline1',
        title: 'Timeline 1',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/timeline/timeline2',
        title: 'Timeline 2',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Icons',
    iconType: 'material-icons-two-tone',
    icon: 'eco',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/icons/material',
        title: 'Material Icons',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/icons/font-awesome',
        title: 'Font Awesome',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Authentication',
    iconType: 'material-icons-two-tone',
    icon: 'supervised_user_circle',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/authentication/signin',
        title: 'Sign In',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/signup',
        title: 'Sign Up',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/forgot-password',
        title: 'Forgot Password',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/locked',
        title: 'Locked',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/page404',
        title: '404 - Not Found',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/page500',
        title: '500 - Server Error',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Extra Pages',
    iconType: 'material-icons-two-tone',
    icon: 'description',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/extra-pages/profile',
        title: 'Profile',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/extra-pages/pricing',
        title: 'Pricing',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/extra-pages/invoice',
        title: 'Invoice',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/extra-pages/faqs',
        title: 'Faqs',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/extra-pages/blank',
        title: 'Blank Page',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Maps',
    iconType: 'material-icons-two-tone',
    icon: 'map',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/maps/google',
        title: 'Google Map',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Multi level Menu',
    iconType: 'material-icons-two-tone',
    icon: 'slideshow',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/multilevel/first1',
        title: 'First',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/',
        title: 'Second',
        iconType: '',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [
          {
            path: '/multilevel/secondlevel/second1',
            title: 'Second 1',
            iconType: '',
            icon: '',
            class: 'ml-menu2',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [],
          },
          {
            path: '/',
            title: 'Second 2',
            iconType: '',
            icon: '',
            class: 'ml-sub-menu2',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [
              {
                path: '/multilevel/thirdlevel/third1',
                title: 'third 1',
                iconType: '',
                icon: '',
                class: 'ml-menu3',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
              },
            ],
          },
        ],
      },
      {
        path: '/multilevel/first3',
        title: 'Third',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },*/
];
