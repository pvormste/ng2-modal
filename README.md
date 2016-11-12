## ng2-modal (Customized)

An angular2 customizable modal using bootstrap.
Customized version based on [ng2-modal made by tixdo](https://github.com/tixdo/ng2-modal).
Works with Angular 2 Final.


### Dependencies

ng2-modal depends on bootstrap, you'll need to include below link before using ng2-modal:

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```


### How to use
- Clone or download the repository.
- Add the directory components/modal into your angular2 app.
- Use it as `<ng2modal></ng2modal>` in the view of the desired component.

 
### Methods

 * ##### Modal Methods
      - `open(component?)`
    
        Opens a modal and here the component is optional. If the component is given it is loaded dynamically in 
        modals body.

      - `close(data?)`
  
        Close method first dispose the component if it exist and then close the modal.This method emits
        modalOutput value i.e. data,if it is given. It is called when cancel button is clicked.

      - `submit()`
 
        submit method dispose the component and then close the modal. This method emits modalOutput value 
        true to provide a callback. It is called when ok button is clicked.
 
### Outputs

 * ##### Modal Output
      - `modalOutput: EventEmitter`
  
        Emits when ModalComponent.close() or ModalComponent.submit() is called.

### Header Properties

 * ##### Modal Properties

      - `modalHeader`: boolean, default:true

        Show or hide the header. Specify true to show.

      - `modalTitle`: string, default: undefined

        If modalHeader is true you can specify title in modalTitle.
   
   
### Body Properties

 * ##### Modal Properties

      - `modalMessage`: boolean, default: true

        Show or hide the message specified in modal body. Specify true to show.

      - `message`: string, default: undefined

        If modalMessage is true you can specify message/content that is to be shown in modal body.

   
### Footer Properties

 * ##### Modal Properties

      - `modalFooter`: boolean, default:true

        Show or hide the footer. Specify true to show.

      - `okButton`: boolean, default: true

        Show or hide the ok button.

      - `okButtonText`: string, default: Ok

        If okButton is true you can specify text of the button in okButtonText.

      - `cancelButton`: boolean, default: true

        Show or hide the cancel button.

      - `cancelButtonText`: string, default: Cancel

        If cancelButton is true you can specify text of the button in cancelButtonText.
   
### Examples
      
  
 * ##### Modal
 
       `modal.open(Login)`: opens a modal with header and body. The modal's footer is hidden as it's value is false.The title and message to be shown are set in modalTitle and message property respectively. Open method optionally takes a component that is loaded dynamically in modal's body. To pass a component in open method you need to import that(here Login component is loaded).If you want to emit some value you can call `close(data)` method and pass the value(optional).

      ```html 
        <button (click)="modalOpen()" class="btn btn-primary">Modal Demo</button>
        <ng2modal (modalOutput)="getData($event)"></ng2modal>
      ```
      ```typescript
         modalOpen(){
            this.modal.modalTitle = "LOGIN";
            this.modal.modalFooter = false;
            this.modal.modalMessage = true;
            this.modal.message = "Here Login component will load.";
            this.modal.open(Login);
         }
      ```