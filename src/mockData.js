const mockData = {
  "questions": [
    {
      "question_text": "What is your gender?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/gender_female_icon.svg",
          "text": "Female",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/gender_male_icon.svg",
          "text": "Male",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/gender_other_icon.svg",
          "text": "Other",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "What is your primary goal?",
      "checkboxes": true,
      "options": [
        {
          "icon": "/images/acrobat.png",
          "text": "Loose weight",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/runGirl.png",
          "text": "Enchance fitness",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/redHeart.png",
          "text": "Boost health",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/snooze.png",
          "text": "Reduce stress",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How do you define your body type?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/M_average 1.svg",
          "womanIcon": "/images/W_average 1.svg",
          "text": "Average",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_plump 1.svg",
          "womanIcon": "/images/W_plump 1.svg",
          "text": "Plump",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_extra 1.svg",
          "womanIcon": "/images/W_extra 1.svg",
          "text": "Extra",
          "icon_type": "image"
        }
      ]
    },
    {
      "question_text": "What type of body do you want to achieve?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/M_fit 1.svg",
          "womanIcon": "/images/W_fit 1.svg",
          "text": "Fit",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_average 2.svg",
          "womanIcon": "/images/W_average 2.svg",
          "text": "Shapely",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_athletic 1.svg",
          "womanIcon": "/images/W_athletic 1.svg",
          "text": "Athletic",
          "icon_type": "image"
        }
      ]
    },
    {
      "question_text": "What are your target zones?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/M_belly 1.svg",
          "womanIcon": "/images/W_belly 1.svg",
          "text": "Belly",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_breasts 1.svg",
          "womanIcon": "/images/W_breasts 1.svg",
          "text": "Breasts",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_legs 1.svg",
          "womanIcon": "/images/W_legs 1.svg",
          "text": "Legs",
          "icon_type": "image"
        },
        {
          "icon": "/images/M_buttocks 1.svg",
          "womanIcon": "/images/W_buttocks 1.svg",
          "text": "Buttocks",
          "icon_type": "image"
        }
      ]
    },
    {
      "question_text": "How long ago were you in the best weight?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/funny.png",
          "text": "<1 year ago",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/littleFunny.png",
          "text": "1-2 years ago",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/sad.png",
          "text": "> 3 years ago",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/stop.png",
          "text": "Never",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "When do you usually have breakfast?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/before7am.png",
          "text": "Before 7 AM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/carrot.png",
          "text": "Between 7 and 9 AM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/eggs.png",
          "text": "Between 9 and 11 AM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/plate.png",
          "text": "I usually skip breakfast",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How about lunch?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/burger.png",
          "text": "Before 1 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/noodles.png",
          "text": "Between 1 and 3 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/soup.png",
          "text": "Between 3 and 5 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/plate.png",
          "text": "I usually skip lunch",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "And when do you have your dinner?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/potato.png",
          "text": "Before 4 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/plov.png",
          "text": "Between 4 and 7 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/chicken.png",
          "text": "After 7 PM",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/plate.png",
          "text": "I usually skip dinner",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Do you prefer cooking or eating out?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/house.png",
          "text": "I prefer to cook at home",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/box.png",
          "text": "I generally eat out",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/rock.png",
          "text": "I like to do both",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "What do you think about fasting during weekends?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/like.png",
          "text": "No problem",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/ok.png",
          "text": "Can give it a go",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/stop.png",
          "text": "No way",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How often do you work out?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/like.png",
          "text": "3-5 times a week",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/ok.png",
          "text": "1-2 workouts a week",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/like.png",
          "text": "Just starting out",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "What kind of work schedule do you have?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/sun.png",
          "text": "A 9-to-5 job",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/halfMoon.png",
          "text": "Night shifts",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/time.png",
          "text": "Flexible hours",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/palm.png",
          "text": "Unemployed / Retired",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Are you active at your work?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/runMan.png",
          "text": "I'm quite active",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/turtle.png",
          "text": "I'm not very active",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/rock.png",
          "text": "It's a mix of both",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How do you feel after walking up a flight of stairs?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/sad.png",
          "text": "I feel short of breath",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/frustrated.png",
          "text": "I feel slightly winded, but I'm okay",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/sadAndCry.png",
          "text": "I feel fine after one flight of stairs",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/strong.png",
          "text": "I can easily climb 3-5 flights of stairs",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How much time do you walk on a typical day?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/like.png",
          "text": "< 20 mins",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/ok.png",
          "text": "20-60 mins",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/strong.png",
          "text": "> 1 hour",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "What is your daily water intake?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/drop.png",
          "text": "About 2 glasses (16 oz)",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/manyDrops.png",
          "text": "Between 2 - 6 glasses (17 - 51 oz)",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/coolMan.png",
          "text": "More than 6 glasses (51 oz >)",
          "icon_type": "emoji"
        }
        ,
        {
          "icon": "/images/coffee.png",
          "text": "I drink only coffee or tea",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How long do you usually sleep?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/yawn.png",
          "text": "I sleep less than 5 hours",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/sleepe.png",
          "text": "I sleep around 5-6 hours",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/bad.png",
          "text": "I sleep well for 7-8 hours",
          "icon_type": "emoji"
        }
        ,
        {
          "icon": "/images/zzz.png",
          "text": "I like to sleep longer than 8 hours",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Are you pregnant?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/pregnant.png",
          "text": "Yes",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/noGirl.png",
          "text": "No",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Do you have any serious back problems?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/yellow.png",
          "text": "Yes",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/strong.png",
          "text": "No",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Are you taking any medication?",
      "checkboxes": true,
      "options": [
        {
          "icon": "/images/vitamin.png",
          "text": "Vitamins",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/hormones.png",
          "text": "Hormones",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/bactery.png",
          "text": "Antibiotics",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/stop.png",
          "text": "None of the above",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Do you have any bad habits?",
      "checkboxes": true,
      "options": [
        {
          "icon": "/images/sleepe.png",
          "text": "I have trouble getting enough sleep",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/coctail.png",
          "text": "I have an addiction to soda",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/chocolate.png",
          "text": "I'm a midnight snacker",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/salt.png",
          "text": "I find it hard to reduce my sugar intake",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/moon.png",
          "text": "I consume a lot of salty foods",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/stop.png",
          "text": "None of the above",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Have any of your life events led to weight gain?",
      "checkboxes": true,
      "options": [
        {
          "icon": "/images/marriage.png",
          "text": "Marriage or relationship",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/boom.png",
          "text": "Stress or mental health",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/vitamin.png",
          "text": "Meds or hormonal disorder",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/busy.png",
          "text": "Busy work schedule",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/pregnant.png",
          "text": "Pregnancy",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/stop.png",
          "text": "No similar event",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "Have you heard about Intermittent Fasting?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/noGirl.png",
          "text": "Just the name",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/thinking.png",
          "text": "I know a few things",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/strong.png",
          "text": "Yes, I’m experienced in fasting",
          "icon_type": "emoji"
        }
      ]
    },
    {
      "question_text": "How motivated are you to reach your happy weight?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/images/eyes.png",
          "text": "I want to find out more about fasting",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/coolMan.png",
          "text": "I want to try",
          "icon_type": "emoji"
        },
        {
          "icon": "/images/thunder.png",
          "text": "I'm really serious about it",
          "icon_type": "emoji"
        }
      ]
    }, {
      "question_text": "How tall are you?",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "What is your current weight?",
      "checkboxes": false,
      "options": []
    },
    {

      "question_text": "What is your target weight?",
      "checkboxes": false,
      "options": []
    },

    {
      "question_text": "Here is your wellness profile",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "Is there a special occasion you want to lose weight for?",
      "checkboxes": false,
      "options": [
        {
          "icon": "/",
          "text": "Vacation",
          "icon_type": "none"
        },
        {
          "icon": "/",
          "text": "Sporting event",
          "icon_type": "none"
        },
        {
          "icon": "/",
          "text": "Beach trip",
          "icon_type": "none"
        }, {
          "icon": "/",
          "text": "Wedding",
          "icon_type": "none"
        },
        {
          "icon": "/",
          "text": "Family occasion",
          "icon_type": "none"
        },
        {
          "icon": "/",
          "text": "Reunion",
          "icon_type": "none"
        },
        {
          "icon": "/",
          "text": "No similar events",
          "icon_type": "none"
        }
      ]
    },
    {
      "question_text": "When is your event?",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "The only plan you’ll ever need to get in shape in 2024",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "Crafting your Fasting Plan",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "Enter your email to get your fasting plan!",
      "checkboxes": false,
      "options": []
    },
    {
      "question_text": "Reach you goal faster XX kg in YY weeks",
      "checkboxes": false,
      "options": []
    },
  ]
};



export default mockData;





