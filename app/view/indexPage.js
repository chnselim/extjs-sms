/*
 * File: app/view/indexPage.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('StudentManagementSystem.view.indexPage', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.indexpage',

    requires: [
        'StudentManagementSystem.view.indexPageViewModel',
        'StudentManagementSystem.view.indexPageViewController',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.button.Button',
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.grid.Panel',
        'Ext.grid.column.Column'
    ],

    controller: 'indexpage',
    viewModel: {
        type: 'indexpage'
    },
    reference: 'indexPage',
    border: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            flex: 0.3,
            margin: '0 0 20 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'image',
                    height: 50,
                    margin: '20 10 0 10',
                    width: 400,
                    src: 'img/header_2.png'
                }
            ]
        },
        {
            xtype: 'toolbar',
            height: 2,
            margin: '0 0 25 0'
        },
        {
            xtype: 'container',
            flex: 0.6,
            margin: '0 0 10 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 0.3,
                    margin: '0 0 0 5',
                    layout: {
                        type: 'vbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Öğrenci No'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'TC Kimlik No'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Adı Soyadı'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Sınıf'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.8,
                    margin: '0 0 0 5',
                    layout: {
                        type: 'vbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtStudentNo',
                            style: 'font-weight:bold;'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtIdentifierNo',
                            style: 'font-weight:bold;'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtName',
                            style: 'font-weight:bold;'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtClass',
                            style: 'font-weight:bold;'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.3,
                    layout: {
                        type: 'vbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Fakülte'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Bölüm'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Aktif Dönem'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.8,
                    layout: {
                        type: 'vbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtFaculty',
                            style: 'font-weight:bold;'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtDepartment',
                            style: 'font-weight:bold;'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            reference: 'txtActiveSeason',
                            style: 'font-weight:bold;'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            height: 110,
                            width: 110,
                            src: 'img/user.png'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 2,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'toolbar',
                    height: 50,
                    items: [
                        {
                            xtype: 'container',
                            flex: 0.5
                        },
                        {
                            xtype: 'button',
                            reference: 'butNotlar',
                            itemId: 'butNotlar',
                            margin: '0 10 0 10',
                            icon: 'img/notlar.png',
                            text: 'Notlar',
                            listeners: {
                                click: 'onButNotlarClick'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'butTranskriptSenaryosu',
                            itemId: 'butTranskriptSenaryosu',
                            margin: '0 10 0 10',
                            icon: 'img/alinandersler.png',
                            text: 'Transkript Senaryosu',
                            listeners: {
                                click: 'onButTranskriptSenaryosuClick'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'butDersProgrami',
                            itemId: 'butDersProgrami',
                            margin: '0 10 0 10',
                            icon: 'img/dersprogrami.png',
                            text: 'Ders Programı',
                            listeners: {
                                click: 'onButDersProgramiClick'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'mesajGonder',
                            margin: '0 10 0 10',
                            icon: 'img/mesajGonder.png',
                            text: 'Mesajlar',
                            listeners: {
                                click: 'onMesajGonderClick'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'butCikis',
                            itemId: 'butCikis',
                            margin: '0 10 0 10',
                            icon: 'img/cikis.png',
                            text: 'Çıkış',
                            listeners: {
                                click: 'onButCikisClick'
                            }
                        },
                        {
                            xtype: 'container',
                            flex: 0.5,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'treepanel',
                            flex: 0.2,
                            width: 556,
                            title: 'Menü',
                            store: 'TreeStore',
                            viewConfig: {
                                itemId: 'mytreeview',
                                listeners: {
                                    itemclick: 'onMytreeviewItemClick'
                                }
                            }
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    collapsible: false,
                                    title: 'Dersleriniz',
                                    titleCollapse: false,
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            flex: 1,
                                            reference: 'courseList',
                                            itemId: 'courseList',
                                            store: 'CourseStore',
                                            viewConfig: {
                                                enableTextSelection: true,
                                                listeners: {
                                                    rowdblclick: 'onDersTableRowDblClick'
                                                }
                                            },
                                            columns: [
                                                {
                                                    xtype: 'gridcolumn',
                                                    reference: 'lesId',
                                                    itemId: 'lesId',
                                                    dataIndex: 'lesId',
                                                    text: 'DERS KODU'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    reference: 'lesClass',
                                                    itemId: 'lesClass',
                                                    dataIndex: 'lesClass',
                                                    text: 'SINIF'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    reference: 'lesName',
                                                    itemId: 'lesName',
                                                    width: 200,
                                                    dataIndex: 'lesName',
                                                    text: 'DERS ADI'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    reference: 'lesCredit',
                                                    itemId: 'lesCredit',
                                                    dataIndex: 'lesCredit',
                                                    text: 'DERS KREDİSİ'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    reference: 'lesTeacher',
                                                    itemId: 'lesTeacher',
                                                    width: 600,
                                                    dataIndex: 'lesTeacher',
                                                    text: 'OKUTMAN'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 247,
                                    collapsed: false,
                                    collapsible: false,
                                    title: 'Yeni Mesajlar',
                                    titleCollapse: false,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onIndexPageAfterRender'
    }

});