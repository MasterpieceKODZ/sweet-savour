# This is is a demo restuarant menu and order website project

## Overview

**Discalimer** all data used in this project are **_imaginative_** and not proven to be true in real world as this is only a demo project.

In this project I have used...

- React
- Typescript
- NextJS
- SASS
- REDUX
- SwiperJS
- Firebase
- fontawesome CSS for icons
- Fontsource (vercel) for text fonts
- Animate CSS

On a window or screen less than 501px, the home page is an autoplay carousel showing some new dishes promotion and on larger screens _**above 500px**_ homepage is a grid layout dashboard also with promotion content.

Each slide in the carousel and grid panel has a button that directs to the menulist page.

On the menu list page, the food and drinks list data is fetched on the server side using getServerSideProp and passed to the client side component.

On a window or sreen-width below **_650px_** the the menulist page is a tab layout with two tabs the food tab show the food list and the drink tab. And on a window above **_650px_** the screen is a two column grid layout with the left column showing the foodlist and the right column showing the drinkslist and each list has its filter button at a top corner

on the food list tab, dish items with options in their menu would be rendered with an options checkbox list element and show options button. only one dish item options can be shown at a time.

When the filter icon on the food or drink tab is click the filter options bottom navbar is brought into view and when clicked again it is dismissed.

Each filter options on either list (food or drink) has an associated filter console where the user can specify prefrences and filter out unwanted items from the list.

The floating action button on the bottom right of the menulist page directs the user to the orderlist page where the user can review and complete their order by making payment P.S there is no realtime payment gateway on this website as it is not a production project.

The orderlist page shows all the items selected by the user and items can be removed from the list by clicking the remove button (red xmark icon at the end of each item ). The orderlist page is designed such that when the user navigates back to menulist either by the floating action button on the page or the browser default back button the filtered list is clear and the menulist is refreshed

The **_make payment_** button on the orderlist page simulates a payment action as i said earlier there is no real world payment gateway because this is a frontend demo project. when the user makes payment the user is shown a preview of their order invoice.

## Refrence

### My Functions

The _**myFunctions**_ folder in the root folder contains some functions seperated from their component or page files to make the code reuseable and debugging easier.

- #### **fetchDrinkCategories.ts/fetchDrinkTypes**

  **_params_** (drinkList : object[]) **_return_** : string[]

  The **_fetchDrinkTypes_** function iterates through the drinkList passed in as an argument and fetches all drinks categories without repition.

- #### **fetchFoodCategories.ts/fetchFoodTypes**

  **_params_** (foodList : object[]) **_return_** : string[]

  The **_fetchFoodTypes_** function iterates through the foodList passed in as an argument and fetches all food categories without repition.

- #### **filterConsoleShowHide.ts/showFilterOption**

  **_params_** (activeConsole : string, targetConsole : string) **_return_** : void

  The **_showFilterOption_** function takes in two arguments the **activeConsole** and **targetConsoles** which are classnames of DOM elements, the **activeConsole** parameter is the classname of the selected filter option for example _type_ or _price_ while the **targetConsoles** parameter is a classname of all the filter consoles in the list.
  This function works by first removing the show class from all the **targetConsoles** elements to be sure not more than one console option is shown at a time then the show class is added to the **activeConsole** element.

- #### **filterConsoleShowHide.ts/closeFilterConsole**

  **_params_** (activeConsole) **_return_** : void

  The **_closeFilterConsole_** function removes the show class from the **activeConsole** DOM element to dismiss it.

- #### **showToastFunction.ts/showToast**

  **_params_** (msg : string) **_return_** : void

  The _showToast_ function briefly displays the toast element at the bottom of the menulist page it does this by first adding the _show_ class to the toast element then it adds the _fade-in_ class, it then waits for **5500ms** then it removes the _fade-in_ which makes the toast element fade out of visibility then after **700ms** it removes the toast element from the DOM completely.

- #### **drinksListFilter.ts/updateFilteredDrinksList**

  **_params_** (drinksList : object[], dispatch : any) **_return_** : void
  The _updateFilteredDrinksList_ function filters the **drinksList** object array passed in as an argument. It first filters the list by selected type and then if the result of the type filtration is not an empty array it is passed down to the **_filterDrinksByPrice_** function, but if the result of the type filtration is an empty array the original drinksList array parameter is passed to the **_filterDrinksByPrice_** function instead.

  After filtration is complete the dispatch function parameter is called with the _actionUpdateDrinksList_ action creator to update the _filteredDrinksList_ redux state which updates the drinks list UI.

- #### **drinksFilterByPrice.ts/filterDrinksByPrice**

  **_params_** (drinksList : object[]) **_return_** : object[]

  This function takes in the **_drinksList_** as an argument and iterates through the list to find the highest price and stores it in an object "**_drinksPriceMinMax_**" with a property **_min_** as zero and **_max_** as the highest price in the list plus ten. And then retreives the price inputs values passed in by the user, the min price input value is tested against the max price input value and if the min price input value is greater than the max price input value the program ignores the inputed max price value and uses the value of the **_max_** prop in the **_drinksPriceMinMax_** object and shows a toast notifying the user that the price range entered was invalid. The result of the filtration is then returned as an object array.

  In the case where the price range entered was valid but there is no drink within that price range the user is shown a toast saying there is no drink in the specified price range and the default unfiltered list is returns instead of returning an empty array.

- #### **drinksFilteredByType.ts/filterDrinksByType**

  **_params_** (drinksList : object[]) **_return_** : object[]
  The **_filterDrinksByType_** function retrieves all the selected drink types and filteres the **_drinksList_** argument by the selected types and then return the result as an object array.

- #### **foodlistFilter.ts/updateFilteredFoodList**

  **_params_** (foodList : object[], dispatch: any) **_return_** : object[]
  The **_updateFilteredFoodList_** function first filters the list by type by passing the foodList argument to the **_filterFoodByType_** function and then filters the returned array by price, the values of the min price input and the max price input are passed to the **_filterFoodByPrice_** function along side the returned new food list array from **_filterFoodByType_**, if the new food list array is empty the foodList parameter value is used instead.

  The **_filterFoodByPrice_** function does not return an array, instead it returns an object with two props the new list filtered by price and the **_priceShowedToast_** prop which is passed down to the **_filterFoodByAllergy_** function. The **_priceShowedToast_** prop is a boolean value that helps the **_filterFoodByAllergy_** function to determine if the **_filterFoodByPrice_** triggered a toast message, and if **_filterFoodByPrice_** function has shown a toast the **_filterFoodByAllergy_** function delays its toast to come after the **_filterFoodByPrice_** toast disappears.

  when the list has been filtered completely the function dispatches the _actionUpdateFoodlist_ action creator and the filteredFoodList state in the redux store is updated.

- #### **foodFilterByType.ts/filterFoodByType**

  **_params_** (foodList : object[]) **_return_** : object[]

  The **_filterFoodByType_** function retrieves all the selected food types and filters the foodList param on all selected food types and returns an array of all the dishes that has a category that matches any of the selected types.

- #### **foodFilterByPrice.ts/filterFoodByPrice**

  **_params_** (foodList : object[], min : string, max : string) **_return_** : object

  The **_filterFoodByPrice_** function takes in three args the **_foodList_** to be filtered and the **_min_** and **_max_** price input values. The function first iterates through the list passed to the **_foodList_** param to find the highest food price which is stored as the value of max prop of the foodPriceMinMax object.

  The function then compare the min and max params values, if the min is greater than the max value, the max param value is ignored and the max price value is used instead and then a toast is shown notifying the user that the price range entered is invalid.

  But if the price range entered is valid but there is no drink in the users desired price range the a toast is shown telling the user that there is no drink in the specified price range.

  In this function a boolean variable **_priceShowedToast_** is created with the initial value of _false_, if the **_filterFoodByPrice_** function shows a toast it is update to _true_.

  When the foodList param has been filtered successfully if the new foodlist is not empty it is returned as the a prop of the function`s return object else the foodList param is returned and the **_priceShowedToast_** is returned as the second prop.

- #### **foodFilterByAllergy.ts/filterFoodByAllergy**

  **_params_** (foodList: object[], priceShowedToast: boolean) **_return_** object[]
  To filter the **_foodList_** array by allergy or to remove dishes with undesired food ingredients specified by the user, first the function retrieves the text entered by the user in the allergy ingredients input and then splits the string by comma and join the array back but this time seperated by a pipe and this text is used to create a regular expression which is tested against every ingredients of every dish in the foodlist and any dish that has any of the ingredients specified by the user is removed from the foodlist.

  When the filtration by allergy is complete the function shows a toast indicating that all the dishes with the specified ingredients has been removed but if the **_priceShowedToast_** param is true the toast is delayed until the **_filterFoodByPrice_** toast disappers.

  Then an array of the filtered food list is returned or if the filtered array is empty the food list param is returned instead.

- #### **showHideIngredientsModal.ts/showIngredientsModal**

  **_params_** (ingredients : string[]) **_return_** : void

  This function displays a modal panel with a list of all the ingredients in the dish.

- #### **showHideIngredientsModal.ts/closeIngredientsModal**

  **_params_** none **_return_** void

  This function closes the ingredients modal when the close button is clicked.

- #### **addItemTab.ts/addDishToTab**

  **_params_** (dish: any, dispatch: any) **_return_** : void
  This function adds a dish to the order foodlist redux state creating an order object with the name and price of the dish passed in as an arg and adds two optional props to the order obj which are the **_options_** prop for dishes with serving options and the **_pref_** option if the user describes how they like the dish to be made.

- #### **addItemTab.ts/addDrinkToTab**

  **_params_** (drink: any,dispatch : any) **_return_** : void
  This function adds a drink to the drinks order list state in the redux store by creating an object with the name and price of the drink which is then added to the drinks order list state

- #### **showHideListTab.ts/showFoodList**

  **_params_** (none) **_return_** : void
  This function brings the foodlist into view in the tab layout, by removing the show class from all _list_ and putting it in the food list alone

- #### **showHideListTab.ts/showDrinkList**

  **_params_** (none) **_return_** : void
  This function brings the drinklist into view in the tab layout, by removing the show class from all _list_ and putting it in the drink list alone

- #### **showHideOrderList.ts/showFoodOrderList**

  **_params_** (none) **_return_**: void
  This function changes the orderlist tab from drinks to food list

- #### **showHideOrderList.ts/showDrinkOrderList**
  **_params_** (none) **_return_**: void
  This function changes the orderlist tab from food to drinks list
