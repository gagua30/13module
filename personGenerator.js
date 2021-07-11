const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
//женсике имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алла",
            "id_2": "Кристина",
            "id_3": "Лена",
            "id_4": "Анна",
            "id_5": "Вика",
            "id_6": "Наталья",
            "id_7": "Оксана",
            "id_8": "Неля",
            "id_9": "Люда",
            "id_10": "Галя"
        }
    }`,
    // мужские отчества
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    // женские отчества
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитовна",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

     // мужские профессии (с небольшими нотками маскулизма)
     workMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Космонавт",
            "id_3": "Программист", 
            "id_4": "Режисер",
            "id_5": "Бейсболист",
            "id_6": "Техник",
            "id_7": "Президент",
            "id_8": "Токарь",
            "id_9": "Оперуполномоченный",
            "id_10": "Водолаз"
        }
    }`,

    // женские профессии 
    workFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Домоседка",
            "id_2": "Логопед",
            "id_3": "Артистка", 
            "id_4": "Повар",
            "id_5": "Воспитатель",
            "id_6": "Швея",
            "id_7": "Музыкантка",
            "id_8": "Вокалистка",
            "id_9": "Дзюдоистка",
            "id_10": "Воровка"
        }
    }`,

    //создал json объект месяцев
    mounthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта", 
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
            }
    }`,
    // райндомный месяц
    randomBirthdayDay: function() {
        return this.randomValue(this.mounthJson);
        
    },

  

    //получение женской фамилии
    surnameFemale: function(){
        let count = JSON.parse(this.surnameJson).count;
        let list = JSON.parse(this.surnameJson).list;
        let value = Object.fromEntries(
            Object.entries(list)
            .map(([ key, val ]) => [ key, val + "a" ])
          );
        let surnameFema = {
            count: 15,
            list: value
        }
        
        return this.randomValue(JSON.stringify(surnameFema));
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    //генерация случайного пола
    randomGender: function(){
        let randomGen = Math.random() < 0.5 ? "famale" : "male";
        return randomGen
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    //возвращает мужские имена
    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    // Возвращает фамилии мужской
     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },
    // Возвращение женского имени
    randomNameFem: function() {

        return this.randomValue(this.firstNameFemaleJson);

    },
    // Возвращает отчетства мужского
    randomPatronymicMale: function() {

        return this.randomValue(this.patronymicMaleJson);

    },
    // Возвращение отчества женского
    randomPatronymicFemale: function() {

        return this.randomValue(this.patronymicFemaleJson);

    },

    // Возвращение мужской работы
    randomWorkMale: function() {

        return this.randomValue(this.workMaleJson);

    },
    // Возвращение женской работы
    randomWorkFemale: function() {

        return this.randomValue(this.workFemaleJson);

    },
  
    

   
    //сюда поступают генерирующиеся сведения
    getPerson: function () {
        this.person = {};
        if(this.randomGender() === "male"){
        this.person.gender = this.GENDER_MALE;
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymicMale();
        this.person.work = this.randomWorkMale();
        }else{
        this.person.gender = this.GENDER_FEMALE;
        this.person.firstName = this.randomNameFem();
        this.person.surname = this.surnameFemale();
        this.person.patronymic = this.randomPatronymicFemale();
        this.person.work = this.randomWorkFemale();
        }
        this.person.mounths = this.randomBirthdayDay()
        if(this.person.mounths == "Февраля"){
            let day = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
            this.person.BirthdayDays =  JSON.stringify(day);
        }
        if(this.person.mounths == "Октября" || "Июля"){
            let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
            this.person.BirthdayDays =  JSON.stringify(day);
        }else{
            let day = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
            this.person.BirthdayDays = JSON.stringify(day);
        }
        let year = Math.floor(Math.random() * (2000 - 1950 + 1)) + 1950;
        this.person.years = JSON.stringify(year);
        return this.person;
    }
};
 
