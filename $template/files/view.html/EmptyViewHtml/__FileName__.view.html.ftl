<div id="starter" ng-init="" ng-destroy="" data-component="crn-start" screen-params="" primary-datasource=""> 
  <div class="display-titulo-memory"> 
  </div> 
  <datasource data-component="crn-datasource" filter="" name="" entity="" keys="_objectKey" rows-per-page="100" class="" schema="[{&quot;name&quot;:&quot;id&quot;,&quot;type&quot;:&quot;String&quot;,&quot;nullable&quot;:false,&quot;key&quot;:false},{&quot;name&quot;:&quot;escuderia&quot;,&quot;type&quot;:&quot;String&quot;,&quot;nullable&quot;:true,&quot;key&quot;:false},{&quot;name&quot;:&quot;piloto&quot;,&quot;type&quot;:&quot;String&quot;,&quot;nullable&quot;:true,&quot;key&quot;:false},{&quot;name&quot;:&quot;_objectKey&quot;,&quot;type&quot;:&quot;String&quot;,&quot;nullable&quot;:false,&quot;key&quot;:true}]" condition="{&quot;maxRecord&quot;:100,&quot;params&quot;:[],&quot;expression&quot;:{&quot;type&quot;:&quot;AND&quot;,&quot;args&quot;:[{&quot;type&quot;:&quot;%&quot;,&quot;left&quot;:&quot;escuderia&quot;,&quot;right&quot;:&quot;{{vars.search|raw}}&quot;,&quot;args&quot;:[]},{&quot;type&quot;:&quot;%&quot;,&quot;left&quot;:&quot;piloto&quot;,&quot;right&quot;:&quot;{{vars.search|raw}}&quot;,&quot;args&quot;:[]}]}}" lazy="true" parameters="" dependent-lazy-post="" checkrequired="" on-after-delete="cronapi.callFunction('cronapi.memory.sucessNotification').call('O registro foi deletado com sucesso!')" on-error="cronapi.callFunction('cronapi.memory.errorNotification').call('Algo de errado aconteceu, favor tentar novamente!')" on-after-create="cronapi.callFunction('cronapi.memory.sucessNotification').call('O registro foi criado com sucesso!')" on-after-update="cronapi.callFunction('cronapi.memory.sucessNotification').call('O registro foi editado com sucesso!')"></datasource> 
  <h1 class="component-holder text-left h3 title col-lg-10 col-md-10 col-sm-8 col-xs-8" xattr-position="text-left" xattr-type="h3" data-component="crn-text-component" id="crn-text-component">Título</h1>
  <div class="component-holder ng-scope col-md-2 col-lg-2 col-sm-4 col-xs-4" data-component="crn-button" ng-hide="datasource.editing || datasource.inserting">
<button class="btn k-button btn-block btn-primary" ng-click="cronapi.callFunction('cronapi.screen.startInsertingMode').call()" xattr-fullsize="btn-block" xattr-theme="btn-primary" xattr-disabled="">
<i class="color-white glyphicon glyphicon-plus" icon-theme="color-white"></i>
<span class="color-white" text-theme="color-white">{{"template.crud.new" | translate}}</span>
</button>
</div>
  <div role="search" ng-hide="datasource.inserting || datasource.editing" data-component="crn-textinput" id="crn-filter-general" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
    <div class="form-group"> 
      <label for="textinput-filter" class="">{{"template.crud.search" | translate}}</label> 
      <input type="text" id="textinput-filter" class="form-control k-textbox" ng-model="vars.search" value="" placeholder=""> 
    </div> 
  </div> 
  <section ng-hide="datasource.inserting || datasource.editing" class="component-holder ng-binding ng-scope col-lg-12 col-md-12 col-sm-12 col-xs-12" data-component="crn-cron-grid" id="cron-crn-grid-search"> 
    <cron-grid options=""ng-model="vars.grid" class="" style="" scrollable=""> 
    </cron-grid> 
  </section> 
   <div data-component="crn-form" id="crn-form-datasource" class="col-lg-12 col-md-12 col-sm-12 col-xs-12" ng-hide="" ng-show="datasource.editing || datasource.inserting"> 
    
    <section class="form" ng-show="datasource.inserting || datasource.editing"> 
      <form crn-datasource="datasource"> 
        <div class="tool-bar" ng-hide=""> 
        </div> 
        <div class="crn-fieldset" ng-disabled="datasource.editing &amp;&amp; datasource.inserting"> 
          <!-- NtoN  --> 
          <!-- NtoN  end--> 
        </div> 
        <div class="col-md-12" style="padding-left: 0; padding-right: 0" data-container="true" data-replace="false"><div class="component-holder ng-scope col-md-3" data-component="crn-button" id="crn-button"> 
            <button aria-label="{{'Save' | translate}}" class="btn k-button btn-block btn-default" ng-click="datasource.post(datasource)" xattr-fullsize="btn-block" xattr-theme="btn-default" xattr-disabled="" id="btn_crud_post"> <span class="color-white" text-theme="color-white">{{'Save' | translate}}</span> </button> 
          </div><div class="component-holder ng-scope  col-md-3" data-component="crn-button" id="crn-button"> 
            <button aria-label="{{'Cancel' | translate}}" class="btn k-button btn-block btn-light" ng-click="cronapi.callFunction('cronapi.memory.modalCancel').call(datasource)" xattr-fullsize="btn-block" xattr-theme="btn-light" xattr-disabled="" id="btn_crud_cancel"> <span class="color-white" text-theme="color-white">{{'Cancel' | translate}}</span> </button> 
          </div></div></form>
        <div class="active-bar text-right" ng-hide="datasource.editing &amp;&amp; datasource.inserting"> 
        </div> 
       
    </section> 
    <section class="form" ng-show="datasource.editing || datasource.inserting"> 
      <form> 
        <div> 
          <!-- OneToN --> 
          <!-- OneToOne  end --> 
        </div> 
      </form> 
    </section> 
  </div>
  </div>