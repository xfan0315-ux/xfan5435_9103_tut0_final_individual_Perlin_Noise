# xfan5435_9103_tut0_final_individual_user_input

# CircleArt – Interactive Perlin Noise Edition
Individual Functional Prototype – by Xingyuan Fang

This project is my individual animated version of our group’s CircleArt composition for DECO1016/9103.
The original group work was a static visual design, consisting of eight large circular compositions.
My individual submission transforms that static work into a dynamic, living, interactive system driven by Perlin Noise and mouse-based interaction.

This README explains how to interact with my work, how I modified the group code, and what technical inspirations and techniques were used to create my personal animated version.

## 1. How to Interact With the Work

After loading the page, the artwork will begin animating automatically.

You can interact with the animation using your mouse:

▶ Move mouse left ↔ right

Controls the intensity of the Perlin Noise motion
→ Left = gentler motion
→ Right = stronger, wavier motion

▶ Move mouse up ↕ down

Controls the speed of all animations
→ Up = slow
→ Down = fast

All circles and their internal components respond smoothly to your mouse movement, producing a dynamic, organic motion.

## 2. Individual Approach to Animating the Group Code
Animation Driver I Chose

I chose Perlin Noise + real-time interaction as the main drivers for animation.
Perlin Noise produces smooth, continuous motion that feels natural and organic—perfect for transforming the static artworks into “breathing” living visuals.

What properties of the image are animated?

Every circle inherits its original static design from the group work, but now includes:

(A) Whole-circle motion

1）Each circle object now has:

2）Perlin-based drifting (x, y wobble)

3）Perlin-based scaling (breathing)

4）Perlin-based rotation (subtle global rotation)

(B) Internal animated components

Each circle has its own Perlin-driven behavior, making every composition unique:

Circle	    Animated Features
Circle 1	Purple ring dots shift in radius & angle
Circle 2	White spokes wiggle & stretch via noise
Circle 3	Petals sway; lengths change over time
Circle 4	Yellow dots float inward/outward
Circle 5	Petals oscillate; blue dots drift
Circle 6	Orange ring dots angle-wiggle
Circle 7	Purple petals sway & stretch
Circle 8	Green outer dots breathe radially

My implementation ensures my animation style is clearly distinct from the other group members.

## 3. Inspirations & References
My animation is inspired by kaleidoscope patterns and mandala-style radial symmetry. These visuals often show repeating shapes that shift gently in angle and size, creating a soft, hypnotic motion. This influenced my decision to use Perlin Noise, because it produces smooth, organic variations instead of abrupt or mechanical movement.

I referenced:
1.Kaleidoscope patterns
2.Mandala symmetry
3.Soft drifting motions seen in abstract generative art

These references guided me to animate each circle component with subtle noise-based rotation, scaling, and radial drift, making the artwork feel alive while maintaining the original group structure.

## 4. Technical Explanation – How My Code Works
-1. Added global Perlin Noise time variable t

Each frame increments t, creating evolving noise values.

-2. Every circle object receives Perlin-driven transformations

Inside CircleArt.display() I added:

position noise → drifting

scale noise → breathing

rotation noise → wobbling

This preserves the group code structure but adds individualized animation.

-3. Perlin Noise wiggle utilities

I wrote a helper function noiseWiggle(seed, amp, t) to generate smooth offsets for:

angles

stroke lengths

radii

petal size variations

-4. Mouse interaction (required for uniqueness)

mouseMoved() updates:

noiseStrength (motion amplitude)

timeScale (animation speed)

-5. Internal components animation

Each circle’s drawing function was modified to animate its sub-elements, such as:

petals

dots

radial shapes

spokes

-6. Detailed comments

I added extensive comments to explain:

which parts come from group work

which parts are my individual additions

why Perlin Noise is used

how interaction is mapped to animation

This aligns with the assignment requirement for code commentary.

## 5. Tools & Techniques Used

1）noise()

2）map()

3）constrain()

4）push() / pop()

5）translate(), rotate(), scale()

6）Object-oriented classes

！！Documentation referenced：

p5.js official reference for noise()
https://p5js.org/reference/#/p5/noise

External code usage

No external code was copied.
All noise-based animation systems were written by me using course knowledge + documentation.

Any AI-generated suggestions were treated as drafts, then manually tested, adjusted, and debugged before being included in the final code.

