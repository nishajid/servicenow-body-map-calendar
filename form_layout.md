# Body Map Update Form Layout

## Section 1: Client Details
- **Client** (Reference field to Client table)
- **Visit Log** (Reference to Visit Log table)

## Section 2: Body Mapping Info
- **Affected Area Description** (Single line text)
- **Notes** (Multi-line text)
- **Annotated Image** (handled via attachment)

## Section 3: Care Action Taken
- **Action Date** (Date)
- **Care Staff** (Reference to sys_user)
- **Action Description** (Multi-line text)
- **Action Status** (Choice: Follow-up Required / Completed)
- **Follow-up Date** (Date)
- **Notes** (Multi-line text)
- **Related Client Visit** (Reference)
