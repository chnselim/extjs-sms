/*
 * File: app/view/mesajGonderPageViewController1.js
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

Ext.define('StudentManagementSystem.view.mesajGonderPageViewController1', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mesajgonderogretmenpage',

    onOnizleButtonClick: function(button, e, eOpts) {
        var controller=this;
        var refs = controller.getReferences();
        var bosGirdi = "";

        if (refs.sinif.value === null && refs.numara.value === null){
            Ext.Msg.alert('HATA', 'Lütfen Gönderilecek Bir Kişi Seçiniz !');
        }

        else{

            if(refs.sinif.value !== null){
                refs.numara.value = "-";
            }
            else if(refs.numara.value !== null){
                refs.sinif.value = "-";
            }

            else{
                Ext.Msg.alert("HATA","Bir grup/kişi seçiniz.");
            }

            var myForm = new Ext.form.Panel({
                width: 320,
                height: 250,
                title: 'Bilgiler',
                modal: true,
                floating: true,
                closable : true,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                {
                    xtype: 'container',
                    flex: 0.7,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                    {
                        xtype: 'label',
                        margin: '15 0 0 0',
                        style: 'font-weight:bold;',
                        text: 'SINIF: ' + refs.sinif.value
                    },
                    {
                        xtype: 'label',
                        margin: '10 0 0 0',
                        style: 'font-weight:bold;',
                        text: 'NUMARA: ' + refs.numara.value
                    },
                    {
                        xtype: 'label',
                        readOnly: true,
                        margin: '10 0 0 0',
                        style: 'font-weight:bold;',
                        text: 'MESAJ: ' + refs.mesaj.value
                    }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.3,
                    layout: {
                        type: 'vbox',
                        align: 'start',
                        pack: 'start'
                    },
                    items: [
                    {
                        xtype: 'button',
                        reference: 'gonderButton',
                        margin: '0 0 0 125',
                        height: 32,
                        text: 'GÖNDER',
                        listeners: {
                            click: 'onGonderButtonClick'
                        }
                    }
                    ]
                }
                ]


            });
            myForm.show();
        }
    },

    onMesajGridRRowDblClick1: function(tableview, record, tr, rowIndex, e, eOpts) {
        var controller = this;
        var refs = controller.getReferences();
        var myForm = new Ext.form.Panel({
            width: 350,
            height: 300,
            title: 'MESAJ',
            modal: true,
            floating: true,
            closable : true,
            items: [
            {
                xtype: 'container',
                flex: 0.3,
                margin: '10 0 0 5',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                {
                    xtype: 'label',
                    width: 350,
                    margin: '5 0 0 0',
                    style: 'font-weight: bold;',
                    text: 'AD SOYAD: ' + refs.mesajGrid.store.data.items[rowIndex].data.unvan + refs.mesajGrid.store.data.items[rowIndex].data.ad
                },
                {
                    xtype: 'label',
                    width: 350,
                    margin: '5 0 0 0',
                    style: 'font-weight: bold;',
                    text: 'TARİH: ' + refs.mesajGrid.store.data.items[rowIndex].data.tarih
                },
                {
                    xtype: 'label',
                    width: 350,
                    margin: '20 0 0 0',
                    text: 'MESAJ: ' + refs.mesajGrid.store.data.items[rowIndex].data.mesaj
                }
                ]
            }]

        });
        myForm.show();
        //Ext.MessageBox.alert(refs.courseList.store.data.items[rowIndex].data.lesName,refs.courseList.store.data.items[rowIndex].data.lesTeacher);
    }

});
