//TUNEZIKI API FOR NEWS
const NEWSAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=wEgl0eP-mS1Rtk8i_eN6RhNhekk0ZjobB-fIFAhiyBsNaUfv9dcgdLfJSVGQ2bIdFOsYeZhhosDJP682LGuVxT9vpCWvKTO2m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJqKP5cJhVNLh-LnzXzXYFtZtedQPmIBITwCzeVMjGCFQ6VIaR61OIpXdiq6VLUiQEbXitS6_f2gs-qPBRrCY-FT9Ho0h8FOaA&lib=MItzFUBu5rLePIZheHuB-PP36b1jVoKuO`;
//TUNE ZIKI USERS API
const USERSAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=kUg8mZrIsGSj87podH6RATyy362cAxS7-0uQ3uNzLOGqHoHg6ZgZ6KoKcbHA_-oYT3VmCc4xw0DaZ7LNC74pRb4aWXx4351pm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKA1v-EIJtEwCE8gbqgQbj6keROuCHuTNbqymVmbyzwhp3fNd59geIx8LTzfcLCd4Ob0GQLI9TsITdlDVVbXwF7XZNmrGC_BWtz9Jw9Md8uu&lib=MH9UzempnPpp__Q4gCJTV5L0wVN3VIjiR`;
//TUNE ZIKI ACCOUNT CREATION
const POSTAPI=`https://sheetdb.io/api/v1/qxjd5bxn6kgri`;
//TUNEZIKI GOSPEL API
const GOSPELAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=5-C-eYBEpPFLDYAe_cnEp0LV2N7PdKvLNMo41MmJB7tRWndmUGE9gr6ErsuSQCqRJAQ3ahcwAyVG5LnFJjnRpqvhGoiFm3Cim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCgt-Vq_2fEbyf_KRefbRoK3GJAEZ0W_Ut_JqsmNU0pRDeZCKXlZerzP1gBYM89W2wvAN6B9YAqqEJSHSOKSCa3YtWkm7h4pz9z9Jw9Md8uu&lib=MsPPz7lLTFAmYdJ9PODrjK70wVN3VIjiR`;
//TUNEZIKI TRAP API
const TRAPAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=pMWaAsev_zVq4yNLSRuACYMXADYPI8zAMsC7FnBkyR3G2FBXv4wdbI-7XneYQS9XdnKsS1pIVNAy0W9zYthWkoEyfVtkKGPlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM9ymZHtzxJ_9VR6qFn6s2a1y4s8bthEeu_vKqmMwQpJ3zIxEtxu3aLFYpdMxWp9fzW-tYCDPA41BVq-9K_w11UzRVwBi_j_Gdz9Jw9Md8uu&lib=M19mg1ryDDJE1TdwjmspcVL0wVN3VIjiR`;
//TUNEZIKI HIPPOP API
const HIPPOPAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=FF2jpaTu4W9QUqICRk2kVTXUGka_yBW28TlVvgwVgHgnuwZK_3DOuHzrO8OhPxU4kHW0PJd-PI9zAMcLUC4w3j_J0ywj2mHGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJGCOWHS7kbmL0BueZXwvW6s-XkC0PhES_mJayc5vHNjbmKBK7pWUNt4rGlZqRZE4aKzw7ivfgicDKO_nltlqJ7PZRXg80LASNz9Jw9Md8uu&lib=Mnt2uQDLY4CDTdJL3hHp0vL0wVN3VIjiR`;
//TUNEZIKI OLDIESAPI
const OLDIESAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=-d0HJTNuWiwSnmQBJUJ046NEvRLtGwBV9dW8aofGuBvQrVe3q3whxG6Rj2ra72CTIUWr6F77NHUyzOUFZSK7ZCywn_v6ml3gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCQ2zkF9Zs4OI_EHqNQdGE5fAGneNwCP_I8YzHJ_CxjhgEsEms43AM8zQmYcK5x-qkLXhzFXOpErpdkECWK284yWim-SVKiPYw&lib=Munls8vl-ttYq-c-GgEzqLP36b1jVoKuO`;
//TUNEZIKI AFRO API
const AFROAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=HFWM9_JelRK83iXNe1nL7ATZKtBfecXKFtomv7mBh4pqQL6V3UbHXLwfyd7WqtZmy2-xWWVwKqJ7e1VK-iFfmqgLa4Y0gES9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPayz3dv2bjWrOg4grb-S5h8IIRqcG-gBB7hK8TaaUvtZvaHK3IeibglBa8-twWTzFd3odoeK2ScgkYR0MRNnWiM5ZG5E9PNY9z9Jw9Md8uu&lib=Mmf3QgoxjMYlVbvkHNkF9g70wVN3VIjiR`;
//TUNE ZIKI ALL SONGS
const SONGSAPI=`https://script.googleusercontent.com/macros/echo?user_content_key=H1knSHGeZTd6yWJpgZsn836ENui2fwzky1Lh77Yj4lR1ENU5R9peCKKKjTcM35A9FQT7KOnzAw1VFYt7ckzwR-JSgkT68XNsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIQJw4UPFltyPcp8wuk75pr56xk3Bdb8eTNPh-rE8RByc2OOX9BNauABDO7ey35NtwgKqga2rHU2Et8hC9WKnYhoRDh1by2Cdtz9Jw9Md8uu&lib=MjhHKD0XK8KIPDSmSUZaeMr0wVN3VIjiR`;
//TERMS API
const TERMSAPIR=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/Terms.txt`;
//PRIVACY ONLINE POLICY API
const ONLINEPOLICYAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/PrivacyPolicy.html`;
//Contact API
const CONTACTUSPAGEAPI=`https://www.e-corpcompanygroup.com`;
//MORE APPS API
const MOREAPPSAPI=`https://www.e-corpcompanygroup.com`;
//BECOME ARTIST API
const BECOMEARTISTSAPI=`https://www.e-corpcompanygroup.com`;
//FORGOT PASSWORD API
const FORGOTPASSWORDAPI=`https://www.e-corpcompanygroup.com`;
//PRIVACY POLICY API
const PRIVACYPOLICYAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/PriavacyPolicy.txt`;
//HELPPAGEAPI
const HELPPAGEAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/help.txt`;
//UPDATEPROFILEPICTUREAPI
const UPDATEPROFILEPICTUREAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/PrivacyPolicy.html`;
//PAYMENTSAPI
const PAYMENTSAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/PrivacyPolicy.html`;
//PROFILEAPI
const PROFILEAPI=`https://ecorpcompanygrouptuneziki.github.io/ConnectionFile/PrivacyPolicy.html`;
