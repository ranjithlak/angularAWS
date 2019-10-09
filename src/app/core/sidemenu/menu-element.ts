export const menus = [
    {
        'name': 'Home',
        'icon': 'dashboard',
        'link': 'dashboard',
        'open': false,
     
        
    },
    {
        'name': 'MyProfile',
        'icon': 'widgets',
        'link': '/auth/scrumboard',
        'open': false,
        
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Tables',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Fixed',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Feature',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Responsive Tables',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]

    },
    //   {
    //       'name': 'Scrumboard',
    //      'open': false,
    //      'link': '/auth/scrumboard',
    //      'icon': 'grade',
    //  }, 
    {
        'name': 'Applications',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chat',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'mail',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Editor',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            }
        ]
    }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
    
];
